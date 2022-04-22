import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerDetailsComponent } from './ber-details.component';

describe('BerDetailsComponent', () => {
  let component: BerDetailsComponent;
  let fixture: ComponentFixture<BerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
