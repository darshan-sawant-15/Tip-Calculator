import { Component, EventEmitter, Output } from '@angular/core';
import { TipElement } from 'src/app/TipElement';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css'],
})
export class AddTipComponent {
  @Output() addTipEvent: EventEmitter<TipElement> = new EventEmitter();
  @Output() showHistoryEvent: EventEmitter<boolean> = new EventEmitter();
  doShowHistory: boolean = false;
  tip: TipElement = {
    bill: 0.0,
    percentage: 0,
    tip: 0.0,
    date: '',
  };
  customPercent: boolean = false;

  calculateTip() {
    this.tip.tip = Math.round((this.tip.bill * this.tip.percentage) / 100);
  }

  registerTip() {
    this.tip.date = new Date().toISOString().split('T')[0];
    if(this.tip.percentage==0){
      this.tip.percentage = (this.tip.tip*100)/(this.tip.bill);
      this.tip.percentage = Number.parseInt(this.tip.percentage.toFixed(2));
    }
    this.addTipEvent.emit(this.tip);
  }

  showHistory() {
    this.doShowHistory = !this.doShowHistory;
    this.showHistoryEvent.emit(this.doShowHistory);
  }
}
