import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email-verify-modal',
  templateUrl: './email-verify-modal.component.html',
  styleUrls: ['./email-verify-modal.component.scss']
})
export class EmailVerifyModalComponent implements OnInit, OnDestroy {
  @Input() email: string = '';
  @Input() show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();

  private intervalId?: number;
  timeTrack: number;

  constructor(private authService: AuthService) {
    this.timeTrack = 60;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show'] && changes['show'].currentValue === true) {
      this.timeTrack = 60;
      this.startCountdown();
    } else if (changes['show'] && changes['show'].currentValue === false) {
      this.clearCountdown();
    }
  }
  
  ngOnInit() {
    this.timeTrack = 60;
  }

  ngOnDestroy() {
    this.clearCountdown();
  }

  startCountdown() {
    this.intervalId = window.setInterval(() => {
      if (this.timeTrack > 0) {
        this.timeTrack -= 1;
      } else {
        this.clearCountdown();
      }
    }, 1000);
  }

  clearCountdown() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  resendEmail() {
    this.authService.verifyEmail(this.email).subscribe(
      () => {
        this.timeTrack = 60;
        this.startCountdown();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  closeModal() {
    this.showChange.emit(false);
  }
}
