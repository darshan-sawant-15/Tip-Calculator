import { Component, EventEmitter, Output } from '@angular/core';
import { TipElement } from 'src/app/TipElement';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css'],
})
export class AddTipComponent {
  //to emit event out to the tips component to add tip
  @Output() addTipEvent: EventEmitter<TipElement> = new EventEmitter();
  //to emit event out to the tips component to show history
  @Output() showHistoryEvent: EventEmitter<boolean> = new EventEmitter();
  doShowHistory: boolean = false;
  tip: TipElement = {
    bill: 0.0,
    percentage: 0,
    tip: 0.0,
    date: '',
  };
  customPercent: boolean = false;
  //to store custom percentage while the checkbox is unchecked
  tempPercent!: number;

  calculateTip() {
    if (this.tip.bill != 0 && this.tip.percentage != 0) {
      this.tip.tip = Math.round((this.tip.bill * this.tip.percentage) / 100);
    }
  }

  registerTip() {
    this.tip.date = new Date().toISOString().split('T')[0];
    if (this.tip.percentage==0) {
      this.tip.percentage = (this.tip.tip * 100) / this.tip.bill;
      this.tip.percentage = Number.parseInt(this.tip.percentage.toFixed(2));
      this.tempPercent = this.tip.percentage;
    }
    this.addTipEvent.emit(this.tip);
    if (this.customPercent == false) {
      this.tip.percentage = 0;
    }
  }

  showHistory() {
    this.doShowHistory = !this.doShowHistory;
    this.showHistoryEvent.emit(this.doShowHistory);
  }

  customPercentChange(newValue: boolean) {
    if (newValue == false) {
      this.tempPercent = this.tip.percentage;
      this.tip.percentage = 0;
    } else {
      this.tip.percentage = this.tempPercent;
    }
  }
}
