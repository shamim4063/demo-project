import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { SingleObjectOutput } from 'src/app/shared/types/single-object-output.interface';
import { SalesInfo } from './types/sales-info.interface';

@Injectable()
export class SalesTabService extends BaseService {
    constructor(injector: Injector) {
        super(injector);
    }

    get(): Observable<SingleObjectOutput<SalesInfo>> {
        return this.http.get<SingleObjectOutput<SalesInfo>>(
            this.apiUrl + '/sales/info',
            this.httpOptions
        );
    }

    save(data: SalesInfo): Observable<SalesInfo> {
        return this.http.post<SalesInfo>(
            this.apiUrl + '/sales/info',
            JSON.stringify(data),
            this.httpOptions
        );
    }
}
