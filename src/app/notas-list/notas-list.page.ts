import { Component, OnInit } from '@angular/core';
import { INota } from '../interface/interfaces';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.page.html',
  styleUrls: ['./notas-list.page.scss'],
})
export class NotasListPage implements OnInit {

  notas: INota[]=[];
  constructor(private storageService: LocalstorageService) { }

  ngOnInit( ) {
    this.getAll();
  }

  getAll(){
    this.notas = this.storageService.getNotas();
  }

}
