import { Component, Input, OnInit } from '@angular/core';
import { LeftComponentType } from '../../types/left-component.interface';

@Component({
    selector: 'app-sales-default',
    templateUrl: './sales-default.component.html',
    styleUrls: ['./sales-default.component.scss'],
})
export class SalesDefaultComponent implements LeftComponentType {
    @Input() data: any;
    constructor() {}

    ngOnInit(): void {
        // console.log(this.data);
    }
}
