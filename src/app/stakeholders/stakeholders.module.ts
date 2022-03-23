import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { StakeholdersComponent } from './stakeholders.component';
import { CommunicationPlanComponent } from './communication-plan/communication-plan.component';

const routes: Routes = [{ path: '', component: StakeholdersComponent }];
@NgModule({
  declarations: [StakeholdersComponent, CommunicationPlanComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class StakeholdersModule {}
