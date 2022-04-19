import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityComponent } from './quality.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

const routes: Routes = [{ path: '', component: QualityComponent }];

@NgModule({
  declarations: [QualityComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class QualityModule {}
