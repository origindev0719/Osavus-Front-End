import { Component } from '@angular/core';
import { countries } from 'countries-list';

import { AuthService } from '../../services/auth.service';

interface ErrorsTypes {
  email: string,
  fullName: string,
  country: string,
  password: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  fullName: string;
  country: string;
  password: string;
  errors: ErrorsTypes;
  isAgreeToTcAndPrivacyPolicy: boolean;
  isAllowSendPromotionalEmails: boolean;
  emailVerify: boolean;

  countries = Object.entries(countries).map(([code, contury]) => ({
    code,
    name: contury.name
  }));

  constructor(private authService: AuthService) {
    this.email = '';
    this.fullName = '';
    this.country = '';
    this.password = '';
    this.isAgreeToTcAndPrivacyPolicy = false;
    this.isAllowSendPromotionalEmails = false;
    this.errors = {
      email: '',
      fullName: '',
      country: '',
      password: '',
    };
    this.emailVerify = false;
  }

  validateField(fieldName: string, value: string) {
    switch (fieldName) {
      case 'email':
        this.errors.email = value && /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email.';
        break;
      case 'fullName':
        this.errors.fullName = value ? '' : 'Full name is required.';
        break;
      case 'password':
        this.errors.password = value && value.length >= 6 ? '' : 'Password must be at least 6 characters.';
        break;
      default:
        break;
    }
  }

  onSubmit() {
    this.authService.register(this.email, this.fullName, this.country, this.password).subscribe(
      () => {
        this.emailVerify = true;
      },
      ({ error }) => {
        if (error && error.errors) {
          this.errors.email = error.errors.Email ? error. errors.Email[0] : '';
          this.errors.fullName = error.errors.FullName ? error.errors.FullName[0] : '';
          this.errors.password = error.errors.Password ? error.errors.Password[0] : '';
        }
      }
    )
  }
}
