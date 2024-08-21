import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MarketingCompanyComponent } from './marketing-company/marketing-company.component';
import { MarketingExpertsComponent } from './marketing-experts/marketing-experts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MarketingCompanyComponent,MarketingExpertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ViralZone';
}
