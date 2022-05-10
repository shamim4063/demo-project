import { Component, OnInit } from '@angular/core';
import { ProjectDetailService } from '../project-detail.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  projectMenus: Array<TabMenu>;

  constructor(public projectDetailsService: ProjectDetailService) {}

  ngOnInit(): void {
    this.projectMenus = MENUS.filter((x) => !x.hidden);
  }
}

interface TabMenu {
    name: string;
    displayName: string;
    hidden?: boolean;
    disabled?: boolean;
    link: string;
    path: string;
    isActive?: boolean;
}

const MENUS: Array<TabMenu> = [
  {
    name: 'project',
    displayName: 'Project',
    link: 'project-tab',
    path: '/pages/project/:id/project-tab',
    isActive: true,
  },
  {
    name: 'sales',
    displayName: 'Sales',
    link: 'sales',
    path: '/pages/project/:id/sales',
  },
  {
    name: 'sales',
    displayName: 'Sales',
    hidden: true,
    link: 'sales-est',
    path: '/pages/project/:id/sales-est',
  },
  {
    name: 'heating-design',
    displayName: 'Heating Design',
    link: 'sales-est',
    path: '/pages/project/:id/sales-est',
  },
];
