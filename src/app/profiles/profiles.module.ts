import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

const routes: Routes = [{ path: '', component: ProfilesComponent }];

@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class ProfilesModule { }
