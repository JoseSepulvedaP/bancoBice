import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndeconService } from '../../services/indecon.service';
import { ValueDetailComponent } from './value-detail.component';
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

describe('ValueDetailComponent', () => {
  let component: ValueDetailComponent;
  let fixture: ComponentFixture<ValueDetailComponent>;
  let service: IndeconService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueDetailComponent, SearchComponent ],
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
    fixture = TestBed.createComponent(ValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getValueDetail', () => {
    const resp = {
      data: {
        key: 'cobre',
        name: 'Precio del Cobre, dólares por libra',
        unit: 'dolar',
        values: {
          1546387200: 1279.27
        }
      }
    };
    spyOn(service, 'getValueDetail'). and.returnValue(of(resp));
    component.getValueDetail('cobre');
    expect(component).toBeTruthy();
  });

  it('getValueDetail ERROR', () => {
    const err = {
      error: {
        err: {
          message: 'No se pudieron obtener los valores del elemento cobre'
        }
      }
    };
    spyOn(service, 'getValueDetail'). and.returnValue(throwError(err));
    component.getValueDetail('oro');
    expect(component).toBeTruthy();
  });

  it('activatedRoute', () => {
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({key: 'plata'});
    expect(component.key).toBe('plata');
  });

  it('newValues', () => {
    component.newValues('oro');
    expect(component).toBeTruthy();
  });
});
