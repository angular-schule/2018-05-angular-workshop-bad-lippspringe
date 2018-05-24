import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-lib-navigation-lib',
  template: `
    <div style="border: 2px solid red;">
      Dies ist eine Navigation!
      Ich zeige fremden Content an!

      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class NavigationLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
