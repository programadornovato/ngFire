import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/service/con.service';

@Component({
  selector: 'app-lista-agrega',
  templateUrl: './lista-agrega.component.html',
  styleUrls: ['./lista-agrega.component.css']
})
export class ListaAgregaComponent implements OnInit {
  item:any={name:''};
  constructor(private ser:ConService) { }

  ngOnInit() {
  }
  agregar(){
    this.ser.addItem(this.item);
  }
}
