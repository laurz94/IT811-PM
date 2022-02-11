import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationPlanComponent } from './communication-plan.component';

const routes: Routes = [{ path: '', component: CommunicationPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationPlanRoutingModule { }
