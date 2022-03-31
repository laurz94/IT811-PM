import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesComponent } from './resources.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ResourcesComponent }];

@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ResourcesModule { }
