import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasListPageRoutingModule } from './asignaturas-list-routing.module';

import { AsignaturasListPage } from './asignaturas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasListPageRoutingModule
  ],
  declarations: [AsignaturasListPage]
})
export class AsignaturasListPageModule {}
