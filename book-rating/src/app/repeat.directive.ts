import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set brRepeat(amount: number) {

    this.viewContainer.clear();

    for (let i = 0; i < amount; i++) {
      this.viewContainer.createEmbeddedView(
        this.templateRef);
    }
  }
}
