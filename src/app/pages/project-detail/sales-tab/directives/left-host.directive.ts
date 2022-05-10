import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLeftHost]',
})
export class LeftHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
