import { Component, OnInit } from '@angular/core';
import { CervejaServiceService } from 'src/app/service/cerveja--service.service';

@Component({
  selector: 'app-component-lista',
  templateUrl: './component-lista.component.html',
  styleUrls: ['./component-lista.component.css']
})
export class ComponentListaComponent implements OnInit {

  cervejas : any;
  cervejaServiceService : CervejaServiceService

  constructor(cervejaServiceService: CervejaServiceService) {

    this.cervejaServiceService = cervejaServiceService;
   }

  ngOnInit(): void {

    this.cervejas = this.cervejaServiceService.getCerveja().subscribe((data => {
        this.cervejas = data;
        console.log(this.cervejas);

      }
    ))
  }

}
