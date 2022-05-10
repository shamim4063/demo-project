import { Type } from '@angular/core';

export class ComponentTypes {
  constructor(
        public selector: string,
        public component: Type<any>,
        public data: any
  ) {}
}
