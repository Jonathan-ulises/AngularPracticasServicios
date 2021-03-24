import { Component, OnInit } from '@angular/core';
import { ZapatoService } from '../services/Zapato.service';
//import { Zapato } from '../model/Zapato';

@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css'],
  providers: [ZapatoService]
})

export class ZapatosComponent implements OnInit {

  //public listZap: Array<Zapato>;
  public resultList:  any;
  constructor( private _ZapatoService: ZapatoService) {
    //this.listZap = [];
  }



  ngOnInit(): void {
    // this.listZap = this._ZapatoService.getZapatos();

    // this._ZapatoService.getUser().subscribe(
    //   result => {
    //     console.log(result.data);
    //   },
    //   error => {
    //     console.log(<any>error);
    //   }
    // )
    this._ZapatoService.getZapatosApiRest().subscribe(
      result => {
        console.log(result)
        this.resultList = result;
      },

      error => {
        console.log(<any>error);
      }
    );

  }   

}
