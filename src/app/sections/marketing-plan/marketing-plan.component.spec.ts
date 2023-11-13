import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPlanComponent } from './marketing-plan.component';

describe('MarketingPlanComponent', () => {
  let component: MarketingPlanComponent;
  let fixture: ComponentFixture<MarketingPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingPlanComponent]
    });
    fixture = TestBed.createComponent(MarketingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
