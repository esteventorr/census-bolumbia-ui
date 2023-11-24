import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CensusFormAnswer } from '../../interfaces/form';
import { FormService } from '../../services/form/form.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-census-form',
  templateUrl: './census-form.component.html',
  styleUrls: ['./census-form.component.scss'],
})
export class CensusFormComponent {
  title: string = 'ECS: Census Form';
  censusForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    layoutService: LayoutService
  ) {
    layoutService.setPageTitle(this.title);
    // Inicializa el formulario con controles para cada pregunta.
    this.censusForm = this.fb.group({
      fullName: [''],
      age: [''],
      gender: [''],
      educationLevel: [''],
      occupation: [''],
      hasDisabilities: [''],
      maritalStatus: [''],
      monthlyIncomeRange: [''],
      hasHealthInsurance: [''],
      householdSize: [''],
      housingType: [''],
      internetConnectionType: [''],
    });
  }

  onSubmit() {
    const formResponses = Object.keys(this.censusForm.value).map((key) => {
      return { question_id: key, answer: this.censusForm.value[key] };
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
}
