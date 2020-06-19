import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';
import { Router } from '@angular/router';

class FakeRouter {
  navigate( params ) { }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: Router, useClass: FakeRouter
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.key = 'oro';
    fixture.detectChanges();
  }));

  it('ngOnInit valueDetail', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('ngOnInit dateValueDetail', () => {
    component.date = '02-01-2020';
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('buildFormKey', () => {
    component.buildFormKey(component.key);
    expect(component).toBeTruthy();
  });

  it('buildForm', () => {
    component.date = '02-01-2020';
    component.buildForm(component.key, component.date);
    expect(component).toBeTruthy();
  });

  it('onSubmit valueDetail', () => {
    component.onSubmit();
    expect(component).toBeTruthy();
  });

  it('onSubmit dateValueDetail', () => {
    component.date = '02-01-2020';
    component.onSubmit();
    expect(component).toBeTruthy();
  });

  it('onClear valueDetail', () => {
    component.onClear();
    expect(component).toBeTruthy();
  });

  it('onClear dateValueDetail', () => {
    component.date = '02-01-2020';
    component.buildForm(component.key, component.date);
    component.onClear();
  });

  it('goToBack', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.goToBack();
    expect(spy).toHaveBeenCalled();
  });

});
