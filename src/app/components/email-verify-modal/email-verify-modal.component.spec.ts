import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifyModalComponent } from './email-verify-modal.component';

describe('EmailVerifyModalComponent', () => {
  let component: EmailVerifyModalComponent;
  let fixture: ComponentFixture<EmailVerifyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailVerifyModalComponent]
    });
    fixture = TestBed.createComponent(EmailVerifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
