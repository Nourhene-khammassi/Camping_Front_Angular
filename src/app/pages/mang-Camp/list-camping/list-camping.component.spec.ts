import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampingComponent } from './list-camping.component';

describe('ListCampingComponent', () => {
  let component: ListCampingComponent;
  let fixture: ComponentFixture<ListCampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
