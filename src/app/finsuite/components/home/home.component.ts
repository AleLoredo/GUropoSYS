import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  banners: any[] = [
    {
      img: 'assets/img/services/tanks/tank-1.webp',
    },
    {
      img: 'assets/img/services/plant-maintenance/maintenance-1.webp',
    },
    {
      img: 'assets/img/services/work-blacksmith/herreria-2.webp',
    },
    {
      img: 'assets/img/services/work-structures/structure-3.webp',
    },
    {
      img: 'assets/img/services/plant-maintenance/maintenance-4.webp',
    },
    {
      img: 'assets/img/services/work-blacksmith/herreria-5.webp',
    },

    {
      img: 'assets/img/services/galpon.webp',
    },
  ];
}
