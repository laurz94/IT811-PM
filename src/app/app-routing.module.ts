import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profiles',
    loadChildren: () =>
      import('./profiles/profiles.module').then((m) => m.ProfilesModule),
  },
  {
    path: 'project-def',
    loadChildren: () =>
      import('./project-def/project-def.module').then(
        (m) => m.ProjectDefModule
      ),
  },
  {
    path: 'stakeholders',
    loadChildren: () =>
      import('./stakeholders/stakeholders.module').then(
        (m) => m.StakeholdersModule
      ),
  },
  {
    path: 'communication-plan',
    loadChildren: () =>
      import('./communication-plan/communication-plan.module').then(
        (m) => m.CommunicationPlanModule
      ),
  },
  {
    path: 'project-charter',
    loadChildren: () =>
      import('./project-charter/project-charter.module').then(
        (m) => m.ProjectCharterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
