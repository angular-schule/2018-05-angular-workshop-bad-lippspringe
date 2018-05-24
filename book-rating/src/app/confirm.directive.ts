import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[brConfirm]'
})
export class ConfirmDirective {

  constructor() { }

  @Output() brConfirm = new EventEmitter<any>();
  @Output() brCancel = new EventEmitter<any>();

  @HostListener('click')
  onClick() {
    const confirmed = window.confirm('Fortfahren?');

    if (confirmed) {
      this.brConfirm.emit();
    } else {
      this.brCancel.emit();
    }
  }
}
