import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingProcessComponent } from './buying-process.component';

describe('BuyingProcessComponent', () => {
  let component: BuyingProcessComponent;
  let fixture: ComponentFixture<BuyingProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyingProcessComponent]
    });
    fixture = TestBed.createComponent(BuyingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
