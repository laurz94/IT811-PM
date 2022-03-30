import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'project-charter',
    loadChildren: () =>
      import('./project-charter/project-charter.module').then(
        (m) => m.ProjectCharterModule
      ),
  },
  { path: 'wbs', loadChildren: () => import('./work-break-down-structure/work-break-down-structure.module').then(m => m.WorkBreakDownStructureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
