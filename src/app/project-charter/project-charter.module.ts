import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { ProjectCharterComponent } from './project-charter.component';
import { CompetitiveAnalysisComponent } from './competitive-analysis/competitive-analysis.component';

const routes: Routes = [{ path: '', component: ProjectCharterComponent }];

@NgModule({
  declarations: [ProjectCharterComponent, CompetitiveAnalysisComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class ProjectCharterModule {}
