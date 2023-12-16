import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamtionComponent } from './list-reclamtion.component';

describe('ListReclamtionComponent', () => {
  let component: ListReclamtionComponent;
  let fixture: ComponentFixture<ListReclamtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReclamtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
