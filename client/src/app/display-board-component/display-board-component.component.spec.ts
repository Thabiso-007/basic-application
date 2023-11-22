import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoardComponentComponent } from './display-board-component.component';

describe('DisplayBoardComponentComponent', () => {
  let component: DisplayBoardComponentComponent;
  let fixture: ComponentFixture<DisplayBoardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBoardComponentComponent]
    });
    fixture = TestBed.createComponent(DisplayBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
