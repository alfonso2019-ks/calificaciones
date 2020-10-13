import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  redirectTo:'home', pathMatch:'full'  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'asignatura',
    loadChildren: () => import('./asignatura/asignatura.module').then(m => m.AsignaturaPageModule)
  },
  {
    path: 'asignaturaList',
    loadChildren: () => import('./asignaturas-list/asignaturas-list.module').then(m => m.AsignaturasListPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then(m => m.NotasPageModule)
  },
  {
    path: 'notasList',
    loadChildren: () => import('./notas-list/notas-list.module').then(m => m.NotasListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
