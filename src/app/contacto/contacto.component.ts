import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactoUsuario } from '../model/Contacto';
import { ZapatoService } from '../services/Zapato.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ZapatoService]
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor(private _zapatosService: ZapatoService) {
    this.usuario = new ContactoUsuario("","","","");
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void{

    console.log(this.usuario);
   

    this._zapatosService.addContactoApiRest(this.usuario).subscribe(
      response => {
        console.log(response);
      }
      ,
      error => {
        console.log(<any>error);
      }
    );
  }



}
