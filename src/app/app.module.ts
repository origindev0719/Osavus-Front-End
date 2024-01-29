import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { EmailVerifyModalComponent } from './components/email-verify-modal/email-verify-modal.component';
import { StrongPasswordInputComponent } from './components/strong-password-input/strong-password-input.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TextInputComponent,
    LogoComponent,
    EmailVerifyModalComponent,
    StrongPasswordInputComponent,
    SocialButtonsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
