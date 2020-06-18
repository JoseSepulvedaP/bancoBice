import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndeconService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtiene los últimos valores de todos los elementos
   */
  getLastData(): Observable<any> {
    const url = `${environment.urlApi}/last`;
    return this.http.get(url)
              .pipe(
                map((resp: any) => {
                  return resp;
                })
              );
  }

  /**
   * Obtiene todos los valores de un elemento particular
   * @param key Parámetro para la busqueda de sus valores
   */
  getValueDetail(key: string): Observable<any> {
    const url = `${environment.urlApi}/values/${key}`;
    return this.http.get(url)
              .pipe(
                map((resp: any) => {
                  return resp;
                })
              );
  }

  /**
   * Obtiene el valor de un elemento particular en una fecha en particular
   * @param key Parámetro para la busqueda de sus valores
   * @param date Parámetro para filtrar busqueda por fecha
   */
  getDateValueDetail(key: string, date: string): Observable<any> {
    const url = `${environment.urlApi}/date/${key}/${date}`;
    return this.http.get(url)
              .pipe(
                map((resp: any) => {
                  return resp;
                })
              );
  }

}
