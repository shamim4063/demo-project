import { Injector, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import AppConsts from 'src/app/app.const';
import { throwError } from 'rxjs';
import { RequestOptions } from 'https';

@Injectable()
export abstract class BaseService {

  httpOptions;
  params: HttpParams;
  protected http: HttpClient;

  constructor(injector: Injector) {
    this.params = new HttpParams();
    this.http = injector.get(HttpClient);
    this.httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
  }

  get appUrl() {
    return AppConsts.appBaseUrl;
  }

  get apiUrl() {
    return AppConsts.apiBaseUrl;
  }

  get imageUrl() {
    return AppConsts.imageBaseUrl;
  }
}
