import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDefaultComponent } from './sales-default.component';

describe('SalesDefaultComponent', () => {
  let component: SalesDefaultComponent;
  let fixture: ComponentFixture<SalesDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesDefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
