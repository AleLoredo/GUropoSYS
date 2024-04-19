import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plant-maintenance',
  templateUrl: './plant-maintenance.component.html',
  styleUrls: ['./plant-maintenance.component.scss'],
})
export class PlantMaintenanceComponent implements AfterViewInit {
  @ViewChild('carousel') carousel: any;
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      id: 1,
      image: 'assets/img/services/plant-maintenance/maintenance-1.webp',
    },
    {
      id: 2,
      image: 'assets/img/services/plant-maintenance/maintenance-2.webp',
    },
    {
      id: 3,
      image: 'assets/img/services/plant-maintenance/maintenance-3.webp',
    },
    {
      id: 4,
      image: 'assets/img/services/plant-maintenance/maintenance-4.webp',
    },
    {
      id: 5,
      image: 'assets/img/services/plant-maintenance/maintenance-5.webp',
    },
    {
      id: 6,
      image: 'assets/img/services/plant-maintenance/maintenance-6.webp',
    },
  ];
  slideIndex: number = 0;
  selectedIndex: number = 0;

  constructor() {
    this.setOptions();
  }

  ngAfterViewInit() {
    if (this.carousel && this.carousel.carouselViewChild) {
      this.showSlides();
    }
  }

  openModal(id: number) {
    const selectedImage = this.images.find((image) => image.id === id);
    if (selectedImage && this.carousel) {
      this.selectedIndex = this.images.indexOf(selectedImage);
      const modalElement = this.carousel.nativeElement?.querySelector('.modal');
      if (modalElement) {
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
      }
    }
  }

  showSlides() {
    if (this.carousel && this.carousel.carouselViewChild) {
      const slides =
        this.carousel.carouselViewChild.nativeElement.querySelectorAll(
          '.carousel-item'
        );
      slides.forEach((slide: any, index: number) => {
        if (index === this.selectedIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  }

  setOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '3000px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '2560px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1366px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
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
