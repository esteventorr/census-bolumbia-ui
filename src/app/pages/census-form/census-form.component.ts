import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CensusFormAnswer } from '../../interfaces/form';
import { FormService } from '../../services/form/form.service';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-census-form',
  templateUrl: './census-form.component.html',
  styleUrls: ['./census-form.component.scss'],
})
export class CensusFormComponent {
  title: string = 'ECS: Census Form';
  mainForm!: FormGroup;
  personForms: FormGroup[] = [];
  people_number: number = 1;
  currentPersonIndex: number = 0;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    layoutService: LayoutService
  ) {
    layoutService.setPageTitle(this.title);
  }
  loadingData = false;

  processResponseData(data: any): any[] {
    const groupedData: any = {};

    data.answers.forEach((answer: any) => {
      const personId = answer.person_id;

      if (!groupedData[personId]) {
        groupedData[personId] = [];
      }

      groupedData[personId].push(answer);
    });

    return Object.values(groupedData);
  }

  transformAnswersToFormData(answers: any[]): any {
    const formData: any = {};

    answers.forEach((answer: any) => {
      formData[answer.question_id] = answer.answer;
    });

    return formData;
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      totalPeople: [1, Validators.min(1)],
    });

    this.updatePersonForms(1);

    this.formService.getAnswers().subscribe({
      next: (response: any) => {
        const processedData = this.processResponseData(response.data);

        // Determina el número total de personas basado en los datos pregrabados
        const peopleNumber = processedData.length;
        this.loadingData = true;
        this.mainForm.get('totalPeople')?.setValue(peopleNumber);
        this.loadingData = false;

        this.personForms = [];
        for (let i = 0; i < peopleNumber; i++) {
          if (processedData[i]) {
            // Cargar formulario con datos pregrabados
            const formData = this.transformAnswersToFormData(processedData[i]);
            this.personForms.push(this.loadPersonForm(formData));
          } else {
            // Crear un formulario vacío
            this.personForms.push(this.createPersonForm());
          }
        }
      },
      error: (error) => {
        console.error('Error al obtener respuestas:', error);
      },
    });

    this.mainForm.get('totalPeople')?.valueChanges.subscribe((value) => {
      if (!this.loadingData) {
        this.updatePersonForms(value);
      }
    });
  }

  loadPersonForm(data: any): FormGroup {
    return this.fb.group({
      fullName: [data.fullName, Validators.required],
      age: [data.age, Validators.required],
      gender: [data.gender, Validators.required],
      educationLevel: [data.educationLevel, Validators.required],
      occupation: [data.occupation, Validators.required],
      hasDisabilities: [data.hasDisabilities, Validators.required],
      maritalStatus: [data.maritalStatus, Validators.required],
      monthlyIncomeRange: [data.monthlyIncomeRange, Validators.required],
      hasHealthInsurance: [data.hasHealthInsurance, Validators.required],
      householdSize: [data.householdSize, Validators.required],
      housingType: [data.housingType, Validators.required],
      internetConnectionType: [
        data.internetConnectionType,
        Validators.required,
      ],
    });
  }

  updatePersonForms(totalPeople: number) {
    this.personForms = [];
    for (let i = 0; i < totalPeople; i++) {
      this.personForms.push(this.createPersonForm());
    }
  }

  createPersonForm(): FormGroup {
    return this.fb.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      educationLevel: ['', Validators.required],
      occupation: ['', Validators.required],
      hasDisabilities: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      monthlyIncomeRange: ['', Validators.required],
      hasHealthInsurance: ['', Validators.required],
      householdSize: ['', Validators.required],
      housingType: ['', Validators.required],
      internetConnectionType: ['', Validators.required],
    });
  }

  nextPerson() {
    if (this.currentPersonIndex < this.mainForm.value.totalPeople - 1) {
      this.currentPersonIndex++;
    }
  }

  previousPerson() {
    if (this.currentPersonIndex > 0) {
      this.currentPersonIndex--;
    }
  }

  allFormsValid(): boolean {
    return this.personForms.every((form) => form.valid);
  }

  onSubmitCurrent() {
    if (this.personForms[this.currentPersonIndex].valid) {
      const currentPersonData: any = Object.keys(
        this.personForms[this.currentPersonIndex].value
      ).map((key) => {
        return {
          question_id: key,
          answer: this.personForms[this.currentPersonIndex].value[key],
          person_id: this.currentPersonIndex,
          people_number: this.people_number,
        };
      });
      // Lógica para enviar los datos de la persona actual
      // Por ejemplo:
      console.log('Datos de la persona actual:', currentPersonData);
      this.formService.sendAnswers(currentPersonData).subscribe({
        next: (response) =>
          console.log('Respuesta individual enviada:', response),
        error: (error) =>
          console.error('Error al enviar respuesta individual:', error),
      });
    }
  }

  onSubmitAll() {
    if (this.allFormsValid()) {
      const submitObservables = this.personForms.map((form, index) => {
        const formData: any = Object.keys(form.value).map((key) => {
          return {
            question_id: key,
            answer: form.value[key],
            person_id: index,
            people_number: this.mainForm.value.totalPeople,
          };
        });
        return this.formService.sendAnswers(formData);
      });

      forkJoin(submitObservables)
        .pipe(
          switchMap((responses) => {
            console.log('Todas las respuestas enviadas:', responses);
            return this.formService.setCompletedFormState({
              ecn: this.formService.ecn,
            });
          })
        )
        .subscribe({
          next: (finalResponse) => {
            console.log('Formulario marcado como completado:', finalResponse);
          },
          error: (error) => {
            console.error('Error en el proceso:', error);
          },
        });
    }
  }
  /*   onSubmit() {
    if (this.allFormsValid()) {
      const formResponses: CensusFormAnswer[] = Object.keys(
        this.censusForm.value
      ).map((key) => {
        return {
          question_id: key,
          answer: this.censusForm.value[key],
          person_id: this.currentPersonIndex,
          people_number: this.people_number,
        };
      });
      console.log(formResponses as CensusFormAnswer[]);

      this.formService.sendAnswers(formResponses).subscribe({
        next: (response) => {
          console.log('Respuestas enviadas:', response);
        },
        error: (error) => {
          console.error('Error al enviar respuestas:', error);
        },
      });
    }
  } */
}
