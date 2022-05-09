import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { SalesTabModule } from './sales-tab.module';

@Injectable()
export class SalesTabService extends BaseService{

  val:string = "Checking";

  constructor(injector: Injector) { 
    super(injector);
  }



}
