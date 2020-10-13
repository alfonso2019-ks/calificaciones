import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { IAsignatura, INota } from './interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private storage: Storage) { }


  getAsignaturas(): IAsignatura[] {
    return JSON.parse(localStorage.getItem('asignatura'));
  }

  async postAsignatura(asignatura: IAsignatura) {
    let asignaturas: IAsignatura[] = [];
    if (this.getAsignaturas() != null) {
      asignaturas = this.getAsignaturas();
    }
    asignaturas.push(asignatura);
    return await localStorage.setItem('asignatura', JSON.stringify(asignaturas));
  }

  getNotas(): INota[] {
    return JSON.parse(localStorage.getItem('nota'));
  }

  async postNota(nota: INota) {
    let notas: INota[] = [];
    if (this.getNotas() != null) {
      notas = this.getNotas();
    }
    notas.push(nota);
    return await localStorage.setItem('nota', JSON.stringify(notas));
  }


}
