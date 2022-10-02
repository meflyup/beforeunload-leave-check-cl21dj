import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeunloadDirective } from './beforeunload.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeforeunloadDirective
  ],
  exports: [
    BeforeunloadDirective
  ]
})
export class BeforeunloadModule { }