import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {

  @HostBinding('style.background-color') color: string;

  @HostListener('mouseover') onMouseOver() {
    this.over('#000', '#dddcdc');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.leave();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  over(color: string, bgColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }

  leave() {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
  }

}
