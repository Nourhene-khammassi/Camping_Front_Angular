import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCampingComponent } from './add-update-camping.component';

describe('AddUpdateCampingComponent', () => {
  let component: AddUpdateCampingComponent;
  let fixture: ComponentFixture<AddUpdateCampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateCampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
