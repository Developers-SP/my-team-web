import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  SimpleChanges
} from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Directive({
  selector: '[appStyles]'
})
export class StylesDirective implements AfterViewInit, OnChanges {
  private el: HTMLElement;

  @Input() appStyles: string;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  applyStyles(): void {
    const styles = JSON.parse(this.appStyles);
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.el.style[key] = styles[key];
      }
    }
  }

  ngAfterViewInit(): void {
    this.applyStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyStyles();
  }
}
