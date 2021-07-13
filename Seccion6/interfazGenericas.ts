interface Persona<T> {
    nombres: T

}
let obj:Persona<string> = {nombres:'Manuel'}
let num :Persona<number> = {nombres:34}