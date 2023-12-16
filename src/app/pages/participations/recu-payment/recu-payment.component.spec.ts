import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuPaymentComponent } from './recu-payment.component';

describe('RecuPaymentComponent', () => {
  let component: RecuPaymentComponent;
  let fixture: ComponentFixture<RecuPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
