import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IAsignatura } from '../interface/interfaces';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  asignatura: IAsignatura;
  asignaturas: IAsignatura[];
  formAdd : FormGroup;
  constructor(private storageService: LocalstorageService) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      codigo: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(9)])),
      nombre: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  save(){
    this.asignatura = this.asignaturaJson(this.formAdd);
    if(this.validarCodigo(this.asignatura.codigo)==null){
      this.storageService.postAsignatura(this.asignatura).then(result => {
        console.log('Guardado');
        this.presentToast("Se agrego correctamente");
        this.formAdd.reset();
      }).catch(e => {
        console.log("error: " + e);
      });
    }else{
      this.presentToast("Este código ya ha sido asignado");
    }
  }

  validarCodigo(codigo: string){
    this.asignaturas = this.storageService.getAsignaturas();
    let asignatura=null;
    this.asignaturas.forEach(element=>{
      console.log(codigo==element.codigo);
      if(element.codigo == codigo){
        asignatura = element;
      }
    });
    return asignatura;
  }

  json(asignatura: IAsignatura){
    return{
      "id":asignatura.id,
      "nombre":asignatura.nombre,
      "codigo":asignatura.codigo
    }
  }

  asignaturaJson(form: FormGroup) {
    return {
      id: 1,
      codigo: form.get('codigo').value,
      nombre: form.get('nombre').value
    }  as IAsignatura;
  }

  

  presentToast(msm:string) {
    const toast = document.createElement('ion-toast');
    toast.message = msm;
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

}
