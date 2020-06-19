import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { IndeconService } from '../../services/indecon.service';
import { LastValuesComponent } from './last-values.component';
import { of, throwError } from 'rxjs';

class FakeRouter {
  navigate( params ) { }
}


describe('LastValuesComponent', () => {
  let component: LastValuesComponent;
  let fixture: ComponentFixture<LastValuesComponent>;
  let service: IndeconService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastValuesComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        IndeconService,
        {
          provide: Router, useClass: FakeRouter
        },
      ]
    })
    .compileComponents();
    service = TestBed.inject(IndeconService);
    fixture = TestBed.createComponent(LastValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getLastData', () => {
    const resp = {
      data: {
        cobre: {
                  key: 'cobre',
                  name: 'Precio del Cobre, dólares por libra',
                  unit: 'dolar',
                  date: 1584489600,
                  value: 2.39
                },
        dolar: {
                  key: 'dolar',
                  name: 'Dólar observado',
                  unit: 'pesos',
                  date: 1584489600,
                  value: 855.09
                }
      }
    };
    spyOn(service, 'getLastData'). and.returnValue(of(resp));
    component.getLastData();
    expect(component).toBeTruthy();
  });

  it('getLastData ERROR', () => {
    const err = {
      error: {
        err: {
          message: 'No se pudieron obtener los últimos valores de todos los elementos'
        }
      }
    };
    spyOn(service, 'getLastData'). and.returnValue(throwError(err));
    component.getLastData();
    expect(component).toBeTruthy();
  });

  it('goToBack', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.goToBack();
    expect(spy).toHaveBeenCalled();
  });
});
