import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-strong-password-input',
  templateUrl: './strong-password-input.component.html',
  styleUrls: ['./strong-password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StrongPasswordInputComponent),
      multi: true,
    }
  ]
})
export class StrongPasswordInputComponent implements ControlValueAccessor {
  @Input() error: string = '';

  @Output() blur = new EventEmitter<void>();

  private innerValue: string = '';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get value(): string {
    return this.innerValue;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit();
  }
}