import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent {
  activeLink: string = 'home';
  isSticky: boolean = false;

  navbarHeight: number = 80; // Altura del navbar, ajusta según tu diseño
  offset: number = 200; // Offset adicional, ajusta según sea necesario

  constructor(
    private viewportScroller: ViewportScroller,
    private el: ElementRef
  ) {}

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element !== null) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        this.navbarHeight -
        this.offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || 0;
    const sections: HTMLElement[] = Array.from(
      this.el.nativeElement.querySelectorAll('.section')
    );
    let currentSection = 'home';
    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop - this.navbarHeight - this.offset;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });
    // Only update activeLink if the current section is different
    if (this.activeLink !== currentSection) {
      this.activeLink = currentSection;
    }
    this.isSticky = scrollPosition > 100;
  }
  activateLink(link: string): void {
    // Deactivate "Home" link if it's not the selected link
    if (this.activeLink !== link) {
      this.activeLink = link;
    }
  }
  abrirClienteCorreo(): void {
    const correoDestino = 'info@gruposysconstrucciones.com.ar';
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correoDestino}`;
    window.open(url, '_blank');
  }
}
