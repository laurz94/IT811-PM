import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { CommunicationPlanComponent } from './communication-plan.component';

const routes: Routes = [{ path: '', component: CommunicationPlanComponent }];

@NgModule({
  declarations: [CommunicationPlanComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class CommunicationPlanModule {}
