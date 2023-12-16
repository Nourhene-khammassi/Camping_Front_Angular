import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileOneCampingPartComponent } from './detaile-one-camping-part.component';

describe('DetaileOneCampingPartComponent', () => {
  let component: DetaileOneCampingPartComponent;
  let fixture: ComponentFixture<DetaileOneCampingPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileOneCampingPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileOneCampingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
