import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileReclamtionComponent } from './detaile-reclamtion.component';

describe('DetaileReclamtionComponent', () => {
  let component: DetaileReclamtionComponent;
  let fixture: ComponentFixture<DetaileReclamtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileReclamtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileReclamtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
