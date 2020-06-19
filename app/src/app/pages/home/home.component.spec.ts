import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

class FakeRouter {
  navigate( params ) { }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {
          provide: Router, useClass: FakeRouter
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAll', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.getAll();
    expect(spy).toHaveBeenCalled();
  });

  it('navigateToDetail', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.navigateToDetail('oro');
    expect(spy).toHaveBeenCalledWith(['/values/oro']);
  });

  it('navigateToDateDetail', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const values = {
      key: 'plata',
      date: '01-01-2020'
    };
    component.navigateToDateDetail(values);
    expect(spy).toHaveBeenCalledWith(['/date/plata/01-01-2020']);
  });

});
