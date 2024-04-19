import { Component } from '@angular/core';

@Component({
  selector: 'app-civil-work',
  templateUrl: './civil-work.component.html',
  styleUrls: ['./civil-work.component.scss'],
})
export class CivilWorkComponent {
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      image: 'assets/img/services/civil-work/obra-1.webp',
    },
  ];
  constructor() {
    this.setOptions();
  }

  setOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1366px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
