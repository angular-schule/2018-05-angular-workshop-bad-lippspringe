import { environment } from './../environments/environment';
import { TokenInterceptor } from './shared/token.interceptor';
import { BookRatingService } from './shared/book-rating.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ConfirmDirective } from './confirm.directive';
import { RepeatDirective } from './repeat.directive';
import { AuthService } from './shared/auth.service';

import { ApiModule, BASE_PATH } from '@angular-schule/book-monkey-api';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent,
    ConfirmDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {
    provide: BASE_PATH,
    useValue: environment.API_BASE_PATH
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }
}

