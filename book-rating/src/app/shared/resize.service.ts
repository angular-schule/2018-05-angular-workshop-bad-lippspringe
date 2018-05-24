import { EventEmitter, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { startWith } from 'rxjs/operators';

export interface Size {
  innerWidth: number;
  innerHeight: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  public get onResize$() {
    return this.tmp$.pipe(
      startWith(typeof(window) !== 'undefined' ? window : {
        innerWidth: 1024,
        innerHeight: 680
      })
    );
  }
  private tmp$ = new EventEmitter<Size>();

  constructor(eventManager: EventManager) {

    eventManager.addGlobalEventListener('window', 'resize',
      e => this.tmp$.next(e.target));
  }
}
