import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDefComponent } from './project-def.component';

const routes: Routes = [{ path: '', component: ProjectDefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDefRoutingModule { }
