import { Injector, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import AppConsts from 'src/app/app.const';

@Injectable()
export class BaseService {

  protected http: HttpClient;
  httpOptions: any = {};
  params: HttpParams;

  get appUrl() {
    return AppConsts.appBaseUrl;
  }

  get apiUrl() {
    return AppConsts.apiBaseUrl;
  }

  get imageUrl() {
    return AppConsts.imageBaseUrl;
  }

  constructor(injector: Injector) {
    this.params = new HttpParams();
    this.http = injector.get(HttpClient);
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpOptions = {
      headers: header
    };
  }

}
