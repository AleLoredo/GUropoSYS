import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-civil-work',
  templateUrl: './civil-work.component.html',
  styleUrls: ['./civil-work.component.scss'],
})
export class CivilWorkComponent {
  @ViewChild('carousel') carousel: any;
  responsiveOptions: any[] = [];
  images: any[] = [
    { id: 1, image: 'assets/img/services/civil-work/obra-1.webp' },
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
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '2560px',
        numVisible: 1,
        numScroll: 1,
      },
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
