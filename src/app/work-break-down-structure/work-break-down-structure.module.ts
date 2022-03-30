import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WorkBreakDownStructureComponent } from './work-break-down-structure.component';

const routes: Routes = [{ path: '', component: WorkBreakDownStructureComponent }];

@NgModule({
  declarations: [
    WorkBreakDownStructureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class WorkBreakDownStructureModule { }
