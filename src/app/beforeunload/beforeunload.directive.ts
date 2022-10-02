import { AfterViewInit, Directive, HostListener, Input, OnDestroy } from '@angular/core';

import { BeforeunloadService } from './beforeunload.service';

@Directive({
  selector: '[beforeunload]'
})
export class BeforeunloadDirective implements AfterViewInit, OnDestroy {
  @Input('beforeunload') event: Function;

  private eventId: string;
 
  constructor(
    private service: BeforeunloadService
  ) { }

  ngAfterViewInit(): void {
    this.eventId = this.service.addLeaveCheck(this.event);
  }

  @HostListener('window:beforeunload', ['$event'])
  public doSomething($event) {
    if (this.event()) {
      return $event.returnValue = true;
    }
  }

  ngOnDestroy(): void {
    this.service.removeLeaveCheck(this.eventId);
  }
}

