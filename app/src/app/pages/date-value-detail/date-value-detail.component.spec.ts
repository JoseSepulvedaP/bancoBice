import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValueDetailComponent } from './date-value-detail.component';

describe('DateValueDetailComponent', () => {
  let component: DateValueDetailComponent;
  let fixture: ComponentFixture<DateValueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateValueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
