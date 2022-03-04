import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { CompetitiveAnalysisComponent } from './competitive-analysis.component';

const routes: Routes = [{ path: '', component: CompetitiveAnalysisComponent }];

@NgModule({
  declarations: [CompetitiveAnalysisComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class CompetitiveAnalysisModule {}
