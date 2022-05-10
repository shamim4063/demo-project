import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingDesignTabComponent } from './heating-design-tab.component';

describe('HeatingDesignTabComponent', () => {
    let component: HeatingDesignTabComponent;
    let fixture: ComponentFixture<HeatingDesignTabComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeatingDesignTabComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeatingDesignTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
