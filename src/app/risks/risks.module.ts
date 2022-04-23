import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RisksComponent } from './risks.component';

const routes: Routes = [{ path: '', component: RisksComponent }];

@NgModule({
  declarations: [RisksComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RisksModule {}
