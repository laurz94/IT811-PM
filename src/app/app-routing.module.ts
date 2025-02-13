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
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'quality', loadChildren: () => import('./quality/quality.module').then(m => m.QualityModule) },
  { path: 'risks', loadChildren: () => import('./risks/risks.module').then(m => m.RisksModule) },
  { path: 'procurement', loadChildren: () => import('./procurement/procurement.module').then(m => m.ProcurementModule) },
  { path: 'execution', loadChildren: () => import('./execution/execution.module').then(m => m.ExecutionModule) },
  { path: 'closure', loadChildren: () => import('./closure/closure.module').then(m => m.ClosureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
