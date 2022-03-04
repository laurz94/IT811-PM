import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { ProjectCharterComponent } from './project-charter.component';

const routes: Routes = [{ path: '', component: ProjectCharterComponent }];

@NgModule({
  declarations: [ProjectCharterComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class ProjectCharterModule {}
