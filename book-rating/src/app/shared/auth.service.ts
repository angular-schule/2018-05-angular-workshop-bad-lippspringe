import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // https://github.com/angular-schule/2018-05-angular-workshop-bad-lippspringe/wiki
  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
      'response_type=token&' +
      `redirect_uri=${this.settings.redirectUri}&` +
      `client_id=${this.settings.clientId}&` +
      `audience=${this.settings.audience}`;

    location.href = url;
  }

  handleAuthentication() {
    this.route.fragment.pipe(
      filter(e => !!e),
      map(fragment => new URLSearchParams(fragment).get('access_token'))
    ).subscribe(token => {
        console.log('Token:', token);
        sessionStorage.setItem('access_token', token);
        window.location.hash = '';
      });
  }

  logout() {
    sessionStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }

  get isAuthenticated() {
    return !!sessionStorage.getItem('access_token');
  }
}
