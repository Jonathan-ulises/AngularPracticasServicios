export class Zapato{
    constructor(
        private modelo: String,
        public talla: String,
        public color: String
    ){

    }

    get getmodelo(): String{
        return this.modelo;
    }
}