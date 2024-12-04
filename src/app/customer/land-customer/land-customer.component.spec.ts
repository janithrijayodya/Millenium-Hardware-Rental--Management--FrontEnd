import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCustomerComponent } from './land-customer.component';

describe('LandCustomerComponent', () => {
  let component: LandCustomerComponent;
  let fixture: ComponentFixture<LandCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
