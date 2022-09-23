const { errorMonitor } = require("events");

const inscriptionKodemiaManu = {
    name: 'Manu Cabrera',
    isInterviewed: false,
    hasOffer: false,
    isEnrolling: false,
    canTakePreBootcamp: false
}



function kodemiaInterviewAdmisions (studentToInterview, callback) {
    console.log(`Entrevistando a ${studentToInterview.name} para realiza su inscripción a kodemia`);
    setTimeout(() => {
        let error = null;
        studentToInterview.isInterviewed = true;

        error = !studentToInterview.isInterviewed
            ? `No se pudo contartar a ${studentToInterview}`
            : null;
        
        callback(error, studentToInterview);
    }, 5000);
}

function makigAndOffer (studentToOffer, callback) {
    console.log(`${studentToOffer.name} te ofrecemos pagar en mensualidades, que te parece`);
    setTimeout(() => {
        let error = null;
        studentToOffer.hasOffer = true;

        error = !studentToOffer.hasOffer
            ? `Sorry, pero no se tiene una oferta para ti en este momento. Gracias`
            : null;

    callback(error, studentToOffer);
    }, 8000);
}

function makingEnrollingProcess (studentToEnroll, callback) {
    console.log(`Esperando el pago de inscripcion del alumno ${studentToEnroll.name} para relizar su inscripción`);
    
    setTimeout(() => {
        let error = null;
        studentToEnroll.isEnrolling = true;

        error = !studentToEnroll.isEnrolling
                ? `Hola ${studenToEnroll.name}, podemos saber porque decidiste no inscibirte a Kodemia, nos ayudaria tu opinión`
                :null;

        callback(error, studentToEnroll);
    }, 14000);
}

function openPreBootcamp(studentToOpenClasses, callback) {
    console.log(`Se es preparando todo el sistema para recibir a el alumno ${studentToOpenClasses.name}`);    
    setTimeout(() => {
        let error = null;
        studentToOpenClasses.canTakePreBootcamp = true;

        error = !studentToOpenClasses
                ? `El koder ${studentToOpenClasses.name} tiene problemas para iniciar su seción`
                : null;

        callback(error, studentToOpenClasses);
    }, 2000);
}


kodemiaInterviewAdmisions(inscriptionKodemiaManu, (errorToInterview, studentInterviewed) => {
    if(errorToInterview) {
        console.log(`Error entrevista: `, errorToInterview);
        return;
    }

    console.log(`${studentInterviewed} ha sido entrevistado y se prepara una evalución para presentarle una oferta`);
    console.log(studentInterviewed);

    makigAndOffer(studentInterviewed, (errorMakingOffer, studentOffer) => {
        if(errorMakingOffer) {
            console.log(`Error, oferta no generada: `, errorMakingOffer);
            return;
        }

        console.log(`Genial!!, ${studentOffer} hemos decidido ofertarte una forma de pago en mensualidades a 18 meses sin intereses`);
        console.log(studentOffer);

        makingEnrollingProcess(studentOffer, (errorToEnrolling, studentEnrolling) => {
            if(errorToEnrolling) {
                console.log('Error en la inscripción: ',errorToEnrolling);
                return;
            }

            console.log(`Que bien!!, estamos listos. ${studentEnrolling.name} ya eres parte de kodemia procesaremos tus datos para darte acceso a las clases`);
            console.log(studentEnrolling);


            openPreBootcamp(studentEnrolling, (errorOpeningPrebootcamp, studentTakingPrebootcamp) => {
                if(errorOpeningPrebootcamp) {
                    console.log(`Error al abrir el espacio en el prebootcamp`, errorOpeningPrebootcamp);
                    return;
                }

                console.log(`Mucha suerte ${studentTakingPrebootcamp.name}, tu historia en kodemia empieza hoy`);
                console.log(studentTakingPrebootcamp);
            })

        })

    })
})