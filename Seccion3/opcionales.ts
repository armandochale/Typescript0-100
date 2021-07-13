const opcionales = (nombre:string, apellido:string, edad?:number)=>{
    
    if (edad){
        console.log(`Se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`)
    } else {
        console.log(`Se llama ${nombre} su apellido es ${apellido}`)
    }
}
opcionales('Manuel','Muñoz',37)