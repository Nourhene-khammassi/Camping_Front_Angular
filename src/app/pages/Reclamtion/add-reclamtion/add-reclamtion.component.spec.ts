import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamtionComponent } from './add-reclamtion.component';

describe('AddReclamtionComponent', () => {
  let component: AddReclamtionComponent;
  let fixture: ComponentFixture<AddReclamtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReclamtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclamtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
