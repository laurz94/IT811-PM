import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClosureComponent } from './closure.component';
import { TableModule } from 'primeng/table';

const routes: Routes = [{ path: '', component: ClosureComponent }];

@NgModule({
  declarations: [ClosureComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TableModule],
})
export class ClosureModule {}
