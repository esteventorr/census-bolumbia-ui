import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from 'src/app/interfaces/form';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  title: string = 'ECS: Sign In';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    layoutService: LayoutService,
    private router: Router
  ) {
    layoutService.setPageTitle(this.title);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    console.log('Login form value:', this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login successful:', response.data.token.token);
          localStorage.setItem('id_token', response.data.token.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login error:', error);
        },
      });
    }
  }
}
