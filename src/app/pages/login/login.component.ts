import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, IconFieldModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  /*-------- inject ---------*/
  route = inject(Router);



  /*-------- variables ---------*/
  // imgs
  bgImgUrl: string = 'bg.jpg';
  logoImgUrl: string = 'logo.svg';
  frameImgUrl: string = 'bg.jpg';

  // login
  username: string = '';
  password: string = '';

  isLoading: boolean = false;
  errorMsg: string = '';
  isValid: boolean = true;

  isVisible: boolean = false;


  /*-------- functions ---------*/

  // validate login

  login() {
    this.isLoading = true;
    this.clearErrorStyle('username');
    this.clearErrorStyle('password');

    let hasError = false;

    if (this.username.trim() === '') {
      this.setInputError('username');
      hasError = true;
    }

    if (this.password.trim() === '') {
      this.setInputError('password');
      hasError = true;
    }

    if (hasError) {
      this.errorMsg = 'Invalid account or password';
      this.isValid = false;
      this.isLoading = false;
      return;
    }

    // simulate
    this.isValid = true;
    this.errorMsg = '';
    setTimeout(() => {
      this.isLoading = false;
      this.route.navigate(['/basic-info-management/trader-overview']);
    }, 1000);

  }

  clearErrorStyle(field: 'username' | 'password') {
    const input = document.querySelector(`#${field}`) as HTMLInputElement;
    if (input) {
      input.style.border = '1px solid #ccc';
    }
  }

  setInputError(field: 'username' | 'password') {
    const input = document.querySelector(`#${field}`) as HTMLInputElement;
    if (input) {
      input.style.border = '1px solid red';
    }
  }

  showPassword() {
    this.isVisible = !this.isVisible;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.isVisible ? 'text' : 'password';
    }
  }


}
