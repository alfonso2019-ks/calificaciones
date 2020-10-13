import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/core';
import { IAsignatura } from '../interface/interfaces';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-asignaturas-list',
  templateUrl: './asignaturas-list.page.html',
  styleUrls: ['./asignaturas-list.page.scss'],
})
export class AsignaturasListPage implements OnInit {

  asignaturas: IAsignatura[] = [];

  constructor(private storageService: LocalstorageService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.asignaturas = this.storageService.getAsignaturas();
  }

}
