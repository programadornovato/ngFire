import { Component, OnInit } from '@angular/core';
import { ConService } from './../../service/con.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  constructor(private con:ConService) { 
    this.con.retornaItems().subscribe(item=>{
      this.items=item;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }
  eliminar(item){
    this.con.eliminar(item);
  }
}
