import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) }, { path: 'project-def', loadChildren: () => import('./project-def/project-def.module').then(m => m.ProjectDefModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
