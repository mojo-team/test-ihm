import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSalleComponent } from './description-salle.component';

describe('DescriptionSalleComponent', () => {
  let component: DescriptionSalleComponent;
  let fixture: ComponentFixture<DescriptionSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
