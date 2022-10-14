/**
 * Escribir  una funcion que reciba un nombre como parametro 
 * y que devuelva un saludo con dicho nombre
 */

function greatings (nombre) {
    const greating = `Hola ${nombre} como estas`

    return greating
}

const saludar = greatings('Manu')
console.log(saludar);

/**Crear una funcion que se devuelva un nombre aleatroio de un arreglo*/

const array = ['Manu', 'Jona', 'Cin', 'Deni', 'Rafa']

//definiendo una funsion
function getNameRandom (kodersArray) {
    const list = kodersArray
    const min = 0
    const max = list.length
    const indexRandom = Math.floor(Math.random() * (max -min) + min) // con el metodo Math.random podemos traer un numeor ramdonm de una logitus en este caso la longitud del array que estamos pasando
    return list[indexRandom] // retonamos el valor del array en la posicion random
}

//ejecucion de la funcion
console.log(getNameRandom(array)); 

// Saludar al nombre random con la funsion saludar

                        //pasando la ejecuacion de una funsion
const saludarRandom = greatings(getNameRandom(array))

console.log(saludarRandom)

