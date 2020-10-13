import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasListPage } from './notas-list.page';

const routes: Routes = [
  {
    path: '',
    component: NotasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasListPageRoutingModule {}
