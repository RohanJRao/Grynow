import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-marketing-company',
  standalone: true,
  imports: [],
  templateUrl: './marketing-company.component.html',
  styleUrls: ['./marketing-company.component.css']
})
export class MarketingCompanyComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initializeAccordion();
    this.muteVideo();
  }

  initializeAccordion() {
    const accodPanels = document.querySelectorAll('.accod-panel');

    accodPanels.forEach(panel => {
      const accodHead = panel.querySelector('.accod-head');

      accodHead?.addEventListener('click', () => {
        const isActive = panel.classList.contains('active');

        // Close all active panels
        document.querySelectorAll('.accod-panel.active').forEach(activePanel => {
          activePanel.classList.remove('active');
          const content = activePanel.querySelector('.accod-content') as HTMLElement;
          content.style.display = 'none';
        });

        if (!isActive) {
          panel.classList.add('active');
          const content = panel.querySelector('.accod-content') as HTMLElement;
          content.style.display = 'block';
        }
      });
    });
  }

  muteVideo() {
    const videoElement = document.getElementById('marketing-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true;
      videoElement.volume = 0; // Additionally set the volume to 0
    }
  }
}
