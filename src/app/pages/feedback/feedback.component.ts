import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      suggestions: [''],
    });
  }

  onSubmit(): void {
    console.log('Feedback submitted:', this.feedbackForm.value.suggestions);
    // Aquí puedes agregar lógica adicional para manejar el envío del feedback
  }
}
