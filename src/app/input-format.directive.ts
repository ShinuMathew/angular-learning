import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private element : ElementRef) { }

  // @Input('format') format: string;
  @Input('appInputFormat') format: string;

  @HostListener('focus')
  onFocus() {
    
  }

  @HostListener('blur')
  onBlur() {
    let value: string = this.element.nativeElement.value;
    if(this.format == 'uppercase')
      this.element.nativeElement.value = value.toUpperCase()
    else if(this.format == 'lowercase')
      this.element.nativeElement.value = value.toLowerCase()
    else if(this.format == 'phone' && String(value).split('').length === 10)
      this.element.nativeElement.value = `+91-(${String(value).substring(0,3)})-${String(value).substring(3,6)}-${String(value).substring(6,10)}`    
  }

}
