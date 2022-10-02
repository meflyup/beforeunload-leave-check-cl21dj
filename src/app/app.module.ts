import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HelloComponent } from './pages/hello/hello.component';
import { WorldComponent } from './pages/world/world.component';
import { BeforeunloadModule, BEFORE_UNLOAD_MESSAGE, BEFORE_UNLOAD_FN } from './beforeunload';
import { of } from 'rxjs';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BeforeunloadModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // you can custom the confirm way with rxjs
    // {
    //   provide: BEFORE_UNLOAD_FN,
    //   useFactory: () => (message: string) => {
    //     alert('Only ok can select');
    //     return of(true);
    //   },
    //   deps: []
    // },
    { provide: BEFORE_UNLOAD_MESSAGE, useValue: 'not complete yet, continue?' }
  ]
})
export class AppModule { }
