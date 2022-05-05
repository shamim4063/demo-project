import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[leftHost]',
})
export class LeftHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
