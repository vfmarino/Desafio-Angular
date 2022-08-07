import { Component, Input, OnInit } from '@angular/core';
import { Cervejas } from 'src/app/model/cervejas';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  

  @Input()

  cerveja!: Cervejas
  constructor() { 

  
  }

  ngOnInit(): void {
  }

}
