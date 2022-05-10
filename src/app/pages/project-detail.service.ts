import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectDetailService {
    private _tabStatus = new BehaviorSubject<'timeline' | 'details'>(
        'timeline'
    );
    $tabStatus: Observable<'timeline' | 'details'>;

    constructor() {
        this.$tabStatus = this._tabStatus.asObservable();
    }

    updateStatus(status: 'timeline' | 'details'): void {
        this._tabStatus.next(status);
    }
}
