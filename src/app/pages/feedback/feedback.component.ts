import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  title: string = 'ECS: Feedback';
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, layoutService: LayoutService) {
    layoutService.setPageTitle(this.title);
  }

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
