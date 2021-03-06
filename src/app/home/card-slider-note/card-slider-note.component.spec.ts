import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSliderComponent } from './card-slider-note.component';

describe('CardSliderComponent', () => {
  let component: CardSliderComponent;
  let fixture: ComponentFixture<CardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
