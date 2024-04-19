import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  responsiveOptions: any[] = [];
  clients: any[] = [
    {
      image: 'assets/img/clients/Logo-1.webp',
    },
    {
      image: 'assets/img/clients/Logo-2.webp',
    },
    {
      image: 'assets/img/clients/Logo-3.webp',
    },
    {
      image: 'assets/img/clients/Logo-4.webp',
    },
    {
      image: 'assets/img/clients/Logo-5.webp',
    },
    {
      image: 'assets/img/clients/Logo-6.webp',
    },
    {
      image: 'assets/img/clients/Logo-7.webp',
    },
    {
      image: 'assets/img/clients/Logo-8.webp',
    },
  ];
  constructor() {
    this.setOptions();
  }

  setOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '3000px',
        numVisible: 11,
        numScroll: 1,
      },
      {
        breakpoint: '2560px',
        numVisible: 10,
        numScroll: 1,
      },
      {
        breakpoint: '2000px',
        numVisible: 8,
        numScroll: 1,
      },
      {
        breakpoint: '1366px',
        numVisible: 8,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '992px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '576px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '361px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
