import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SalesDefaultComponent } from './components/sales-default/sales-default.component';
import { SalesEstimateComponent } from './components/sales-estimate/sales-estimate.component';
import { LeftHostDirective } from './directives/left-host.directive';
import { SalesTabService } from './sales-tab.service';
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
  navigationSubscription: Subscription;
  ok={};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salesTabService: SalesTabService

  ) { }

  ngOnInit() {
    this.loadComponent();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        let childData = this.route.snapshot.firstChild?.data;
        if (childData?.parentComponent) {
          this.loadComponent(childData.parentComponent);
        }
      }
    });
  }

  loadComponent(selector = 'default') {
    let loadedParent: ComponentTypes | undefined = COMPONENTS.find(c => c.selector === selector);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    if (loadedParent) {
      const componentRef = viewContainerRef.createComponent<LeftComponentType>(loadedParent.component);
      componentRef.instance.data = loadedParent?.data;
    }
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

}

const COMPONENTS = [
  new ComponentTypes(
    'default',
    SalesDefaultComponent,
    { name: 'Default One', title: 'Component Title' }
  ),
  new ComponentTypes(
    'estimate',
    SalesEstimateComponent,
    { name: 'Estimate One', title: 'Component Title' }
  )
]

