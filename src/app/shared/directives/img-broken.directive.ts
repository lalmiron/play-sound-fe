import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[psfImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    elNative.src = '../../../assets/img_broken_logo.png'
  }
  constructor(private elHost: ElementRef) { 
    console.log(this.elHost);
  }

}
