interface Persona{
    altura:number
    peso:number
    nombre?:string
}

let persona = {altura:2,peso:120,nombre:'Jose'}

function MostrarMediaPeso(persona:Persona):string{
    let mediaPeso:number = persona.altura / persona.peso
    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${mediaPeso}`

    }else{
        return `No se quien eres pero tienes una media de ${mediaPeso}`

    }
}
console.log(MostrarMediaPeso(persona))