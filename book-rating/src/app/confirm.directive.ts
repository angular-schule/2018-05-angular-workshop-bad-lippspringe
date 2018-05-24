import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[brConfirm]'
})
export class ConfirmDirective {

  constructor() { }

  @Output() confirm = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  @HostListener('click')
  onClick() {
    const confirmed = window.confirm('Fortfahren?');

    if (confirmed) {
      this.confirm.emit();
    } else {
      this.cancel.emit();
    }
  }
}
