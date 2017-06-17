import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteSalleComponent } from './entete-salle.component';

describe('EnteteSalleComponent', () => {
  let component: EnteteSalleComponent;
  let fixture: ComponentFixture<EnteteSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteteSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
