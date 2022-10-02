import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BeforeunloadService } from './beforeunload.service';
import { BEFORE_UNLOAD_MESSAGE } from './beforeunload.token';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<any> {

  constructor(
    private service: BeforeunloadService,
    @Optional() @Inject(BEFORE_UNLOAD_MESSAGE) private message: string,
  ) { }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.leaveCheck(this.message);
  }
}
