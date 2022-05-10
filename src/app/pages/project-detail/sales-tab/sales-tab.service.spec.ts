import { TestBed } from '@angular/core/testing';

import { SalesTabService } from './sales-tab.service';

describe('SalesTabService', () => {
    let service: SalesTabService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SalesTabService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
