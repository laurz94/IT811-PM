import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholdersRoutingModule } from './stakeholders-routing.module';
import { StakeholdersComponent } from './stakeholders.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [StakeholdersComponent],
  imports: [CommonModule, StakeholdersRoutingModule, TableModule],
})
export class StakeholdersModule {}
