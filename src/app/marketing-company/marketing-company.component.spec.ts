import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCompanyComponent } from './marketing-company.component';

describe('MarketingCompanyComponent', () => {
  let component: MarketingCompanyComponent;
  let fixture: ComponentFixture<MarketingCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
