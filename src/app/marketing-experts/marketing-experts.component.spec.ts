import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingExpertsComponent } from './marketing-experts.component';

describe('MarketingExpertsComponent', () => {
  let component: MarketingExpertsComponent;
  let fixture: ComponentFixture<MarketingExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingExpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketingExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
