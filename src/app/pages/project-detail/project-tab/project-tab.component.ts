import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.scss']
})
export class ProjectTabComponent implements OnInit {

  showDetail: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  tabChange(){
    this.showDetail = !this.showDetail
  }
}
