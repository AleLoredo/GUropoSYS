import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section-construction',
  templateUrl: './section-construction.component.html',
  styleUrls: ['./section-construction.component.scss'],
})
export class SectionConstructionComponent {
  @ViewChild('carousel') carousel: any;
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      id: 1,
      image: 'assets/img/services/work-blacksmith/herreria-1.webp',
    },
    {
      id: 2,
      image: 'assets/img/services/work-blacksmith/herreria-2.webp',
    },
    {
      id: 3,
      image: 'assets/img/services/work-blacksmith/herreria-3.webp',
    },
    {
      id: 4,
      image: 'assets/img/services/work-blacksmith/herreria-4.webp',
    },
    {
      id: 5,
      image: 'assets/img/services/work-blacksmith/herreria-5.webp',
    },
    {
      id: 6,
      image: 'assets/img/services/work-blacksmith/herreria-6.webp',
    },
    {
      id: 7,
      image: 'assets/img/services/work-blacksmith/herreria-7.webp',
    },
    {
      id: 8,
      image: 'assets/img/services/work-blacksmith/herreria-8.webp',
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
