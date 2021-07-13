function mostrar(dato:string):string{
    return dato
}
console.log(mostrar('Manuel'))

function mostrarGenericas<T>(dato:T):T{
    return dato
}



console.log(mostrarGenericas(34))
console.log(mostrarGenericas(true))
console.log(mostrarGenericas('Jose'))

