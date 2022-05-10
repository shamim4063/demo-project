import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable()
export class SalesTabService extends BaseService{

  constructor(injector: Injector) { 
    super(injector);
  }

  sales:boolean= false;

  getSalesInfo(){
    if(this.sales == false){
      
    }
    // return this.http.get<Config>(this.configUrl);
  }

}
