import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private httpSvc: HttpClient) { }

  getCountries(): Promise<any> {
    return this.httpSvc.get(environment.api_url).toPromise();
  }
}
