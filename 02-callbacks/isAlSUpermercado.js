/**
 * Acciones:
 * 1. ir al mercado - 5000ms
 * 2. Pagar la despensa - 30000ms
 * 3. llegar a casa - 4000ms
 * 
 * callback
 */


function goTosuoerMarket(callback) {
    console.log('Llegando al supermercado')
    setTimeout(() => {
        // Se ejecuta l callback
        callback(null, 'Hola ya llegue al super mercado')
    },5000)
}

function payThings(callback) {
    console.log('aciendo fila para pagar');
    setTimeout(() => {
        callback(null, 'Hola, ya pague la despensa');
    }, 3000);
}

function arriveHome (callback) {
    console.log('Llegando a casa');
    setTimeout(() => {
        callback(null, 'Hola, ya estoy en casa');
    }, 2000);
}

goTosuoerMarket((error, mensaje) => {
    if (error) {
        console.log('Ah sucedido algo: ', error);
        return // salida temprana
    }
    console.log(mensaje);

    payThings((error, message) => {
        if(error) {
            console.log('Error', error);
            return
        }
        console.log(mensaje);


        arriveHome((errorArrive, messageHome) => {
            if(errorArriveHome) {
                console.log('Error', errorArriveHome);
                return
            }            

            console.log(messageArrival);
        })
        
    })
})

/**
 * Proceso de inscripcion a kodemia
 *  1. recibir informacion/ entrevista
 *  2. Envir la oferta
 *  3. Inscripcion
 *  4. prebootcamp
 * 
 */

const inscripcionKodemiaCin = {
    name:'Manu',
    isInterviewed: false,
    hasOffer: false,
    isInscript: false,
    canTakeClass: false
}



function interviewProess(student, callback) {
    console.log('Siendo entrevistado por Kodemia')
    setTimeout(() => {
        student.isInterviewd = true
        // Se ejecuta l callback
        callback(null, 'Terminamos con la entrevista, Qué te ha parecido?' )
    },3000)
}

function listenOffer(student, callback) {
    console.log('Te ofertamos beca del 100% para tomar el bootcamp')
    setTimeout(() => {
        // Se ejecuta l callback
        callback(null, 'Excelente esperamos una repuesta', student.hasOffer = true )
    },1000)
}

function inscriptionChecker(student, callback) {
    console.log('Me inscrbiri al bootcamp para ser fullstack')
    setTimeout(() => {
        // Se ejecuta l callback
        callback(null, 'Listo estas inscrito en el bootcamp', student.isInscript = true )
    },2000)
}


function takingPreBootcamp(student, callback) {
    console.log('Siendo entrevistado por Kodemia')
    setTimeout(() => {
        // Se ejecuta l callback
        callback(null, '', student.canTakeClass = true )
    },7000)
}


interviewProess((error, mensaje, objeto) => {
    if (error) {
        console.log('Se fue el internet, nos conectamos mañana?', error);
        return // salida temprana
    }
    console.log(mensaje);
}
)




// falsy && truthy

// thuthy -> cualquier valor que evalua a true en una pregunta logica
// falsy -< culquier valor que evalua a 'fase en una pregunta logica
// ""
// "5645"
// 39
// 3.4
// {}
// []



// Falsy

// const cadenaVacia = ''
// const cero = 0;
// const valrNull = null

