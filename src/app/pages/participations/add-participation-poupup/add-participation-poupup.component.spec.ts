import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipationPoupupComponent } from './add-participation-poupup.component';

describe('AddParticipationPoupupComponent', () => {
  let component: AddParticipationPoupupComponent;
  let fixture: ComponentFixture<AddParticipationPoupupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipationPoupupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipationPoupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
