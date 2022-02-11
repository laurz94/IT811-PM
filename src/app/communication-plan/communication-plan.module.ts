import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationPlanRoutingModule } from './communication-plan-routing.module';
import { CommunicationPlanComponent } from './communication-plan.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CommunicationPlanComponent],
  imports: [CommonModule, CommunicationPlanRoutingModule, TableModule],
})
export class CommunicationPlanModule {}
