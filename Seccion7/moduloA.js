"use strict";
/*export const nombre:string = 'Manuel'

export class Persona{
    nombre:string
}

export interface Humano{
    nombre:string
}

export const mostrar = (dato:string):void => {
    console.log('Mostrar')
}*/
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, altura) {
        this.nombre = nombre;
        this.altura = altura;
        this.edad = edad;
    }
    Persona.prototype.mostrar = function () {
        console.log(this.nombre);
    };
    return Persona;
}());
exports["default"] = Persona;
