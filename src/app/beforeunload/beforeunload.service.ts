import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BEFORE_UNLOAD_FN } from './beforeunload.token';

@Injectable({
  providedIn: 'root'
})
export class BeforeunloadService {

  leaveCheckFn: { [Key: string]: Function } = {};

  constructor(
    @Optional() @Inject(BEFORE_UNLOAD_FN) private alertFn:
      (message: string) => Observable<boolean>,
  ) { }

  addLeaveCheck(fn: Function) {
    const nowKey = Object.keys(this.leaveCheckFn).length;
    this.leaveCheckFn[nowKey] = fn;
    return `${nowKey}`;
  }

  leaveCheck(message: string) {

    const checkResult = Object.keys(this.leaveCheckFn).some((key) => {
      const result = this.leaveCheckFn[key]();
      if (typeof (result) === 'string') {
        message = result;
      }
      return result;
    });

    if (checkResult) {
      return this.alertFn ?
        this.alertFn(message) :
        of(confirm(message));
    }
    return of(true);
  }

  removeLeaveCheck(key: string) {
    delete this.leaveCheckFn[key];
  }
}
