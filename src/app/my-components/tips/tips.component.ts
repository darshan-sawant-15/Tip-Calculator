import { Component } from '@angular/core';
import { TipElement } from 'src/app/TipElement';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
})
export class TipsComponent {
  tips!: TipElement[];
  localItem!: string|null;
  doShowHistory: boolean = false;

  constructor() {
    this.localItem = localStorage.getItem('tips');
    if (this.localItem == null) {
      this.tips = [];
    } else {
      this.tips = JSON.parse(this.localItem);
    }
  }
  tipAdd(tip: TipElement) {
    this.tips.unshift(tip);
    localStorage.setItem('tips', JSON.stringify(this.tips));
  }

  showHistory(value:boolean){
    this.doShowHistory = value;
  }
}
