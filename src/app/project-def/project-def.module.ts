import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { ProjectDefComponent } from './project-def.component';

const routes: Routes = [{ path: '', component: ProjectDefComponent }];

@NgModule({
  declarations: [ProjectDefComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TableModule],
})
export class ProjectDefModule {}
