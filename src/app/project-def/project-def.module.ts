import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { ProjectDefRoutingModule } from './project-def-routing.module';
import { ProjectDefComponent } from './project-def.component';

@NgModule({
  declarations: [ProjectDefComponent],
  imports: [CommonModule, ProjectDefRoutingModule, TableModule],
})
export class ProjectDefModule {}
