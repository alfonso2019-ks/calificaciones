import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICorte, IItem, INota, IAsignatura } from '../interface/interfaces';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  formAdd : FormGroup;
  constructor(private storageService: LocalstorageService) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      asignatura: new FormControl('', Validators.compose([Validators.required])),
      estudiante: new FormControl('', Validators.compose([Validators.required])),
      quizU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pQuizU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      tallerU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pTallerU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialPracticoU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialPracticoU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialTeoricoU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialTeoricoU: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      quizD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pQuizD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      tallerD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pTallerD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialPracticoD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialPracticoD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialTeoricoD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialTeoricoD: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      quiz3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pQuiz3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      taller3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pTaller3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialPractico3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialPractico3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
      parcialTeorico3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(5), Validators.maxLength(4)])),
      pParcialTeorico3: new FormControl('', Validators.compose([Validators.required,Validators.min(0), Validators.max(100), Validators.maxLength(4)])),
    });

  }

  corte1: ICorte = {definitiva:0,items:[
    {nombre:"Quiz",porcentaje:0,valor:0},
    {nombre:"Talleres",porcentaje:0,valor:0},{nombre:"Parcial Práctico",porcentaje:0,valor:0},
    {nombre:"Parcial Práctico",porcentaje:0,valor:0}]} as ICorte;
  corte2: ICorte = {definitiva:0,items:[
    {nombre:"Quiz",porcentaje:0,valor:0},
    {nombre:"Talleres",porcentaje:0,valor:0},{nombre:"Parcial Práctico",porcentaje:0,valor:0},
    {nombre:"Parcial Práctico",porcentaje:0,valor:0}]} as ICorte;
    corte3: ICorte = {definitiva:0,items:[
      {nombre:"Quiz",porcentaje:0,valor:0},
      {nombre:"Talleres",porcentaje:0,valor:0},{nombre:"Parcial Práctico",porcentaje:0,valor:0},
      {nombre:"Parcial Práctico",porcentaje:0,valor:0}]} as ICorte;


  nota: INota={} as INota;

  asignaturas:IAsignatura[];
  asignatura: IAsignatura;

  save(){
    this.jsonNotas(this.formAdd);
    console.log(this.nota);
    if(this.nota.asignatura != null){
      if(this.validarPorcentajes()){
        this.calcularDefinitivaCorte();
        this.storageService.postNota(this.nota).then(result => {
          console.log('Guardado');
          this.presentToast("Se agrego correctamente, definitiva :"+this.nota.definitiva);
          //this.formAdd.reset();
        }).catch(e => {
          console.log("error: " + e);
          this.presentToast("Error al guardar");
        });
      }else{
        this.presentToast("Error en los porcentajes");
      }
    }else{
      this.presentToast("Esta asignatura no existe");
    }
  }

  jsonNotas(form: FormGroup){
    this.obtenerAsignatura(form.get('asignatura').value);
    this.nota.estudiante = form.get('estudiante').value;
    this.nota.asignatura = this.asignatura;
    this.nota.cortes = [this.corte1, this.corte2, this.corte3];
    this.nota.cortes[0].items[0].porcentaje = form.get('pQuizU').value;
    this.nota.cortes[0].items[0].valor = form.get('quizU').value;
    this.nota.cortes[0].items[1].porcentaje = form.get('pTallerU').value;
    this.nota.cortes[0].items[1].valor = form.get('tallerU').value;    
    this.nota.cortes[0].items[2].porcentaje = form.get('pParcialPracticoU').value;
    this.nota.cortes[0].items[2].valor = form.get('parcialPracticoU').value;
    this.nota.cortes[0].items[3].porcentaje = form.get('pParcialTeoricoU').value;
    this.nota.cortes[0].items[3].valor = form.get('parcialTeoricoU').value;

    this.nota.cortes[1].items[0].valor = form.get('quizD').value;
    this.nota.cortes[1].items[0].porcentaje = form.get('pQuizD').value;
    this.nota.cortes[1].items[1].porcentaje = form.get('pTallerD').value;
    this.nota.cortes[1].items[1].valor = form.get('tallerD').value;
    this.nota.cortes[1].items[2].porcentaje = form.get('pParcialPracticoD').value;
    this.nota.cortes[1].items[3].porcentaje = form.get('pParcialTeoricoD').value;
    this.nota.cortes[1].items[2].valor = form.get('parcialPracticoD').value;
    this.nota.cortes[1].items[3].valor = form.get('parcialTeoricoD').value;

    this.nota.cortes[2].items[0].valor = form.get('quiz3').value;
    this.nota.cortes[2].items[0].porcentaje = form.get('pQuiz3').value;
    this.nota.cortes[2].items[1].porcentaje = form.get('pTaller3').value;
    this.nota.cortes[2].items[1].valor = form.get('taller3').value;
    this.nota.cortes[2].items[2].porcentaje = form.get('pParcialPractico3').value;
    this.nota.cortes[2].items[2].valor = form.get('parcialPractico3').value;
    this.nota.cortes[2].items[3].porcentaje = form.get('pParcialTeorico3').value;
    this.nota.cortes[2].items[3].valor = form.get('parcialTeorico3').value;
  }

  obtenerAsignatura(codigo: string){
    this.asignaturas = this.storageService.getAsignaturas();
    this.asignatura=null;
    this.asignaturas.forEach(element=>{
      console.log(codigo==element.codigo);
      if(element.codigo == codigo){
        this.asignatura = element;
      }
    });
  }

  validarPorcentajes():boolean{
    let bandera = true;
    this.nota.cortes.forEach(element => {
      let promedio = 0;
      element.items.forEach(item=>{
        promedio+=item.porcentaje;
      });
      if(promedio!=100){
        bandera = false;
      }
    });
    return bandera;
  }

  calcularDefinitivaCorte(){
    this.nota.cortes.forEach(element => {
      element.definitiva = 0;
      element.items.forEach(item=>{
        element.definitiva += item.valor * (item.porcentaje/100);
      });
    });
    this.nota.definitiva = this.nota.cortes[0].definitiva * 0.3+this.nota.cortes[1].definitiva * 0.3+this.nota.cortes[2].definitiva * 0.4;
  }

  presentToast(msm:string) {
    const toast = document.createElement('ion-toast');
    toast.message = msm;
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

}
