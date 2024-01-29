import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPasswordInputComponent } from './strong-password-input.component';

describe('StrongPasswordInputComponent', () => {
  let component: StrongPasswordInputComponent;
  let fixture: ComponentFixture<StrongPasswordInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongPasswordInputComponent]
    });
    fixture = TestBed.createComponent(StrongPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
