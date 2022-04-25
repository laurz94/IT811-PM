import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

import { ExecutionComponent } from './execution.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ExecutionComponent }];

@NgModule({
  declarations: [ExecutionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ProgressBarModule,
    TableModule,
  ],
})
export class ExecutionModule {}
