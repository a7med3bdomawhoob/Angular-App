import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.6s ease-in-out');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (componentPosition < windowHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    }

    else{
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    }
  }
}
