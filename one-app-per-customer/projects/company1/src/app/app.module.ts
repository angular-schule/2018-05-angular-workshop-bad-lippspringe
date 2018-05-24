import { NavigationLibModule } from 'navigation-lib';
import { SharedLibModule } from 'shared-lib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLibModule,
    NavigationLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
