import { Component, OnInit } from '@angular/core';
import { ProjectDetailService } from '../project-detail.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    public projectDetailsService: ProjectDetailService
  ) { }

  ngOnInit(): void {
  }

}
