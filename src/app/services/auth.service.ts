import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_API = 'https://api.staging.osavus.com/api/auth/';

  constructor(private http: HttpClient) { }

  register(email: string, fullName: string, contry: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'register',
      {
        fullName,
        email,
        password,
        contry,
        isAgreeToTcAndPrivacyPolicy: true,
        isAllowSendPromotionalEmails: true
      },
      httpOptions
    );
  };

  verifyEmail(email: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'resend-email-verification',
      {
        email,
      },
      httpOptions,
    );
  };
}
