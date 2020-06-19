import { TestBed } from '@angular/core/testing';
import { IndeconService } from './indecon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('IndeconService', () => {
  let service: IndeconService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        IndeconService
      ]
    });
    service = TestBed.inject(IndeconService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLastData', () => {
    const lastItem = {
                        key: 'cobre',
                        name: 'Precio del Cobre, dólares por libra',
                        unit: 'dolar',
                        date: 1584489600,
                        value: 2.39
                      };
    service.getLastData(true).subscribe((resp: any) => {
      expect(resp).toBe(lastItem);
    });
    const req = httpMock.expectOne(`${environment.urlExternalApi}/last`);
    expect(req.request.method).toBe('GET');
    req.flush(lastItem);
    httpMock.verify();
  });

  it('getValueDetail', () => {
    const detailItem = {
                          key: 'oro',
                          name: 'Precio del Oro, dólares por onza',
                          unit: 'dolar',
                          values: {
                            date: '01-02-2020',
                            value: '1279.27'
                          }
                        };
    service.getValueDetail('oro', true).subscribe((resp: any) => {
      expect(resp).toBe(detailItem);
    });
    const req = httpMock.expectOne(`${environment.urlExternalApi}/values/oro`);
    expect(req.request.method).toBe('GET');
    req.flush(detailItem);
    httpMock.verify();
  });

  it('getDateValueDetail', () => {
    const detailDateItem = {
                              key: 'oro',
                              name: 'Precio del Oro, dólares por onza',
                              unit: 'dolar',
                              date: 1577923200,
                              value: 1514.63
                            };
    service.getDateValueDetail('oro', '02-01-2020', true).subscribe((resp: any) => {
      expect(resp).toBe(detailDateItem);
    });
    const req = httpMock.expectOne(`${environment.urlExternalApi}/date/oro/02-01-2020`);
    expect(req.request.method).toBe('GET');
    req.flush(detailDateItem);
    httpMock.verify();
  });

});
