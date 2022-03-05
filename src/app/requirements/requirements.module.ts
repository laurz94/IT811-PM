import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RequirementsComponent } from './requirements.component';

const routes: Routes = [{ path: '', component: RequirementsComponent }];

@NgModule({
  declarations: [
    RequirementsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class RequirementsModule { }
