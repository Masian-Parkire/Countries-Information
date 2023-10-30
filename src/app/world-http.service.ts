import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WorldHttpService {
  public url = 'https://restcountries.eu/rest/v2/';

  constructor(private _http: HttpClient) {}

  public getAllCountriesFromRegion(region: string): Observable<any> {
    return this._http.get(`${this.url}region/${region}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getCountryByLanguage(code: string): Observable<any> {
    return this._http.get(`${this.url}lang/${code}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getCountryByCurrency(code: string): Observable<any> {
    return this._http.get(`${this.url}currency/${code}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public handleError(err: HttpErrorResponse): Observable<any> {
    console.log('Error Handler');
    console.error(err.message);
    return throwError(err.message);
  }
}
