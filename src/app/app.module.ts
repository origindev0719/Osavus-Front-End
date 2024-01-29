import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailVerifyModalComponent } from './components/email-verify-modal/email-verify-modal.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { StrongPasswordInputComponent } from './components/strong-password-input/strong-password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    EmailVerifyModalComponent,
    LogoComponent,
    SocialButtonsComponent,
    StrongPasswordInputComponent,
    TextInputComponent,
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
