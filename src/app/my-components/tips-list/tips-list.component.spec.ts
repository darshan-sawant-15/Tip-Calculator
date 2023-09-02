import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsListComponent } from './tips-list.component';

describe('TipsListComponent', () => {
  let component: TipsListComponent;
  let fixture: ComponentFixture<TipsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsListComponent]
    });
    fixture = TestBed.createComponent(TipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
