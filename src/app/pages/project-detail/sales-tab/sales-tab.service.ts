import { HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { SalesTabModule } from './sales-tab.module';

@Injectable()
export class SalesTabService extends BaseService{

  constructor(injector: Injector) { 
    super(injector);
  }

  

}
