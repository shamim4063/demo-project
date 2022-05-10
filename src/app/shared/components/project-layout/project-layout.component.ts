import { Component, OnInit } from '@angular/core';
import { ProjectDetailService } from 'src/app/pages/project-detail.service';

@Component({
    selector: 'app-project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: ['./project-layout.component.scss'],
})
export class ProjectLayoutComponent implements OnInit {
    status: 'timeline' | 'details';

    constructor(private projectDetailService: ProjectDetailService) {}

    ngOnInit(): void {
        this.projectDetailService.$tabStatus.subscribe(
            (value) => (this.status = value)
        );
    }
}
