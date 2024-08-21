import { Component, ElementRef } from '@angular/core';

interface BrandCard {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-marketing-experts',
  standalone: true,
  imports: [],
  templateUrl: './marketing-experts.component.html',
  styleUrls: ['./marketing-experts.component.css']
})

export class MarketingExpertsComponent {

}