import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { AwesomeButtonComponent } from './awesome-button.component';

@NgModule({
  imports: [
  ],
  declarations: [SharedLibComponent, AwesomeButtonComponent],
  exports: [SharedLibComponent, AwesomeButtonComponent],
  entryComponents: [AwesomeButtonComponent] // now it will be never removed, even in AOT
})
export class SharedLibModule { }
