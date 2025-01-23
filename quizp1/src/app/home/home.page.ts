import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  eventForm: FormGroup;
  events: any[] = [];

  constructor() {
    this.eventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      managerName: new FormControl('', Validators.required),
      managerPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      isConfirmed: new FormControl(false),
    });
  }

  saveEvent() {
    if (this.eventForm.valid) {
      this.events.push({...this.eventForm.value});
      this.eventForm.reset();
    }
  }

  confirmEvent(index: number) {
    this.events[index].isConfirmed = !this.events[index].isConfirmed;
  }
}
