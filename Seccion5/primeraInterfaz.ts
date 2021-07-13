interface Persona{
    //Atributos
    nombre:string
    apellido:string

}
function caminar(persona:Persona):void{
    console.log('la persona '+ persona.nombre + ' esta caminando')
}
let nueva_persona = {nombre:'Manuel',apellido:'Muñoz'}
caminar(nueva_persona)