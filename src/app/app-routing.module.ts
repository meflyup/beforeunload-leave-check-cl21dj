import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { WorldComponent } from './pages/world/world.component';
import { HelloComponent } from './pages/hello/hello.component';
import { LeaveGuard } from './beforeunload/leave.guard';

const routes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'hello',
    component: HelloComponent,
    canDeactivate: [LeaveGuard]
  },
  {
    path: 'world',
    component: WorldComponent,
    canDeactivate: [LeaveGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
