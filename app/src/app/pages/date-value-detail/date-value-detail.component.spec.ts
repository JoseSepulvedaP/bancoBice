import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndeconService } from '../../services/indecon.service';
import { DateValueDetailComponent } from './date-value-detail.component';
import { SearchComponent } from '../../shared/search/search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, of, throwError } from 'rxjs';

class FakeRouter {
  navigate( params ) { }
}

class FakeActivatedRoute {
  private subjectActivatedRoute = new Subject();

  push(value: any) {
    this.subjectActivatedRoute.next(value);
  }

  get params() {
    return this.subjectActivatedRoute.asObservable();
  }
}

describe('DateValueDetailComponent', () => {
  let component: DateValueDetailComponent;
  let fixture: ComponentFixture<DateValueDetailComponent>;
  let service: IndeconService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateValueDetailComponent, SearchComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        IndeconService,
        {
          provide: Router, useClass: FakeRouter
        },
        {
          provide: ActivatedRoute, useClass: FakeActivatedRoute
        }
      ]
    })
    .compileComponents();
    service = TestBed.inject(IndeconService);
    fixture = TestBed.createComponent(DateValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getDateValueDetail', () => {
    const resp = {
      data: {
        key: 'oro',
        name: 'Precio del Oro, dólares por onza',
        unit: 'dolar',
        date: 1577923200,
        value: 1514.63
      }
    };
    spyOn(service, 'getDateValueDetail'). and.returnValue(of(resp));
    component.getDateValueDetail('oro', '02-01-2020');
    expect(component).toBeTruthy();
  });

  it('getDateValueDetail ERROR', () => {
    const err = {
      error: {
        err: {
          message: 'No se pudieron obtener los valores del elemento oroo para la fecha 02-01-2020'
        }
      }
    };
    spyOn(service, 'getDateValueDetail'). and.returnValue(throwError(err));
    component.getDateValueDetail('oroo', '02-01-2020');
    expect(component).toBeTruthy();
  });

  it('activatedRoute', () => {
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({key: 'plata', date: '02-02-2020'});
    expect(component.key).toBe('plata');
    expect(component.date).toBe('02-02-2020');
  });

  it('newValues', () => {
    const values = {
      key: 'oro',
      date: '02-01-2020'
    };
    component.newValues(values);
    expect(component).toBeTruthy();
  });
});
