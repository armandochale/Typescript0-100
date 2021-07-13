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

class Persona{
    nombre:string
    edad:number
    altura:number

    constructor(nombre,edad,altura){
        this.nombre = nombre
        this.altura = altura
        this.edad = edad
    }
    mostrar():void {
        console.log(this.nombre)
    }

}
export default Persona