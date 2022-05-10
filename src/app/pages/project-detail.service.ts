import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailService {
  $tabStatus: Observable<'timeline' | 'details'>;

  private _tabStatus = new BehaviorSubject<'timeline' | 'details'>(
    'timeline'
  );

  constructor() {
    this.$tabStatus = this._tabStatus.asObservable();
  }

  updateStatus(status: 'timeline' | 'details'): void {
    this._tabStatus.next(status);
  }
}
