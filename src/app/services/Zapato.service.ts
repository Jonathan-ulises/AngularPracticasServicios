import { Injectable } from '@angular/core';
import { Zapato } from '../model/Zapato';
import { ContactoUsuario } from '../model/Contacto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ZapatoService {

    public BASE_URL: String;

    

    constructor(public _http: HttpClient){
        // this.listaZapatos = [
        //     new Zapato('Mocasines', '28 1/2', 'Cafe'),
        //     new Zapato('Huarache', '26', 'Arena'),
        //     new Zapato('Bota de rodeo', '27 1/2', 'Oxford'),
        //     new Zapato('Bostoniano', '27', 'Negro')
        // ];

        //COMSUMO DE SERVICIO
        this.BASE_URL = "http://localhost:8084/RESTPeces";
    }

    // getZapatos(): Array<Zapato>{
    //     return this.listaZapatos;
    // }

    // getUser(): Observable<any> {

    //     return this._http.get(this.BASE_URL + "api/users");
    // }


    getZapatosApiRest(): Observable<any> {
        return this._http.get(this.BASE_URL + "api/zapatos/getAll");
    }
    
    addContactoApiRest(user: ContactoUsuario): Observable<any> {
        let params = JSON.stringify(user);
        let cabeceras = new HttpHeaders().set('content-type', 'aplication/json');
        
        return this._http.post(this.BASE_URL + "prefijo", params, {headers: cabeceras});
    }
}