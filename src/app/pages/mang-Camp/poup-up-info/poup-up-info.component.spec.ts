import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupUpInfoComponent } from './poup-up-info.component';

describe('PoupUpInfoComponent', () => {
  let component: PoupUpInfoComponent;
  let fixture: ComponentFixture<PoupUpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoupUpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupUpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
