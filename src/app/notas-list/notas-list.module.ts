import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasListPageRoutingModule } from './notas-list-routing.module';

import { NotasListPage } from './notas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasListPageRoutingModule
  ],
  declarations: [NotasListPage]
})
export class NotasListPageModule {}
