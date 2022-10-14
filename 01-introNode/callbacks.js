//callbacks funcion ir al super mercado


//calback es la declaracion de una funcion que pasa a otra funcion
// como parametro a otra funcion para ser ejeutada posteriormente

function irAlSuperMercado (callback) {
    console.log('Llegando alsupermercado');
    console.log('Llegue al supermercado');
    const mensaje = callback(null, 'Hola mamá ya estoy en el supermercado')
    console.log(mensaje);
}

function avisar (){
    return 'Hola ya estoy en el supermercado'
}

const aviso = irAlSuperMercado(avisar) // pasamos la declaracion de una funcion para ser ejecutada dentro de la funcion
// si mandamos avisar() mandamos la ejecucion de la funcion

console.log(aviso);

//los callbacks tienen una frima la cual es la forma en como acepta los parametros o como los va a recibir  
//por lo regular un callback recibira el error y la data

//firma -> forma en que una funcion recibe sus parametros

/**
 * estructura general de un callback
 * 
 function callback(error, data){
     if(error){
 
     }
    }
 */


function avisar (error, mensaje) {
    if(error){
        console.log('Ha ocurrido un error: ', error);
    }else {
        return mensaje
    }
}

/**
 * 1. avisar cuando haya llegado al supermercado
 * 3.  Avisar cuando haya comprado la despensa
 * 3.  Avisar cuadno haya llegado a casa
 */


function pay(callback) {
    console.log('Pagando la despensa');
    const mensaje = callback(null, 'Hola, ya pague la despensa')
}

function arriveHome(callback) {
    console.log('Llegando a casa....');
    const mensaje =callback(null, 'Hola, ya llegue a casa')
    console.log(mensaje);
}


//sincrona
irAlSuperMercado(avisar)
pay(avisar)
arriveHome(avisar)

// sincrono
console.log('Hola!!');
console.log('¿Cómo estan');
const num1 = 10
const num2 = 20
console.log('sum: ', num1 + num2);

// que pasaria si cada actividad me toma un tiempo definido

// asincronismo en js, que significa asincrono?
// asincrono es, que no es secuencial, puede ser ejecutada en tiempos diferentes
// Segun mdn son acciones que ocurren al mismo tiempo o que acciones ocurren sin esperar a que otras se ejecuten


//ejemplo: consultar una base de datos, hacer un fetch con la base

setTimeout(() => {
    console.log('Hola rafa!!');
    //
    console.log('Buenas noches amigos');
    console.log('Descansen koders');
}, 2000)

console.log('Buenas noches amigos');
console.log('Descansen koders');

// caso de uso

// const userCreated = createUser() // asincrono

// const userTemplate = `${userCreated.name} ${userCreated.lastName}` // esto no se puee ejecutar porque la creacion dle user no se ha llevado a cabo de la linea 99

//ejemplo
let numero1
let numero2

setTimeout(() =>{
    numero1 = 20
    numero2 = 30
},3000)

console.log(numero1+ numero2);

//en este ejemplo no se puede realizar la suma por eso el resultado es NaN, No a Number
// por que la asignacion de los valores alos numeros no ha sucedido cuando la suma se reliza
