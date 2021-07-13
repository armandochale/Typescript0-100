//Parametros por defecto
var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "Se llama " + nombre + " su apellido es " + apellido + " y su edad es " + edad;
};
console.log(mostrar('Manuel', 'Muñoz', 37));
console.log(mostrar('Victoria', 'Mas'));
