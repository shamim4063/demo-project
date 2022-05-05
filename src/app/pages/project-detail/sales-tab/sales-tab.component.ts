import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SalesDefaultComponent } from './components/sales-default/sales-default.component';
import { SalesEstimateComponent } from './components/sales-estimate/sales-estimate.component';
import { LeftHostDirective } from './directives/left-host.directive';
import { ComponentTypes } from './types/component-types';
import { LeftComponentType } from './types/left-component.interface';


@Component({
  selector: 'app-sales-tab',
  templateUrl: './sales-tab.component.html',
  styleUrls: ['./sales-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalesTabComponent implements OnInit {

  @ViewChild(LeftHostDirective, { static: true }) adHost!: LeftHostDirective;
  navigationSubscription: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadComponent(COMPONENTS[0]);
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        if (this.router.url.split('/')[5] == 'estimate') {
          this.loadComponent(COMPONENTS[1]);
        } else {
          this.loadComponent(COMPONENTS[0]);
        }
      }
    });
  }

  loadComponent(adItem) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<LeftComponentType>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

}

const COMPONENTS = [
  new ComponentTypes(
    SalesDefaultComponent,
    { name: 'Bombasto', bio: 'Brave as they come' }
  ),
  new ComponentTypes(
    SalesEstimateComponent,
    { name: 'Dr IQ', bio: 'Smart as they come' }
  )
]

