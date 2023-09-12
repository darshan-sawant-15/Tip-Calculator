import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TipElement } from 'src/app/TipElement';

@Component({
  selector: 'app-tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.css']
})
export class TipsListComponent {
  @Input() tipsList!:TipElement[];
  @Output() clearHistoryEvent: EventEmitter<boolean> = new EventEmitter();

  clearHistory(){
    this.clearHistoryEvent.emit();
  }

}
