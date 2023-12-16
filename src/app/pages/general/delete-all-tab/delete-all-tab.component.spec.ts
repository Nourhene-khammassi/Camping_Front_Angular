import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllTabComponent } from './delete-all-tab.component';

describe('DeleteAllTabComponent', () => {
  let component: DeleteAllTabComponent;
  let fixture: ComponentFixture<DeleteAllTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
