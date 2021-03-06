import { Component, Input, OnInit } from '@angular/core';
import { LeftComponentType } from '../../types/left-component.interface';

@Component({
  selector: 'app-sales-estimate',
  templateUrl: './sales-estimate.component.html',
  styleUrls: ['./sales-estimate.component.scss'],
})
export class SalesEstimateComponent implements LeftComponentType {
    @Input() data: any;

}
