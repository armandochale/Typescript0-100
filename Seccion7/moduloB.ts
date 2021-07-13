/*import {nombre,Persona,Humano,mostrar} from './moduloA'
import * as paquete from './moduloA'
console.log(nombre)

const humano:Humano = {nombre:'Manuel'}
mostrar('Manuel')*/

import Persona from './moduloA'
const p = new Persona('Manuel',35,2)
p.mostrar()