import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasListPage } from './asignaturas-list.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasListPageRoutingModule {}
