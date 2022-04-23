import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { ProcurementComponent } from './procurement.component';

const routes: Routes = [{ path: '', component: ProcurementComponent }];

@NgModule({
  declarations: [ProcurementComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TableModule],
})
export class ProcurementModule {}
