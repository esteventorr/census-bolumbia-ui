import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CensusQuestion, CensusResponse } from '../../interfaces/form';
import { CENSUS_QUESTIONS } from '../../constants/form';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-census-form',
  templateUrl: './census-form.component.html',
  styleUrls: ['./census-form.component.scss'],
})
export class CensusFormComponent {
  censusForm: FormGroup;

  constructor(private fb: FormBuilder,  private formService: FormService) {
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
    // Estructura la respuesta para imprimir en la consola.
    const formResponses = Object.keys(this.censusForm.value).map((key) => {
      return { questionId: key, response: this.censusForm.value[key] };
    });

    console.log({ responses: formResponses });

    this.formService.submitResponses(formResponses).subscribe({
      next: (response) => {
        console.log('Respuestas enviadas:', response);
      },
      error: (error) => {
        console.error('Error al enviar respuestas:', error);
      }
    });
  }
}
