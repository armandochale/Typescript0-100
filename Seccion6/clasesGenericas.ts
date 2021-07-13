class Persona<T>{
    nombre:string
    edad:T

    Mostrar:(dato:T)=>T
}
const obj = new Persona()