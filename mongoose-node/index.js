import mongoose from 'mongoose'

const db_User = 'ManuelCR'
const db_Password = 'YomiYomi'
const db_Name = 'kodemia'
const db_Host = 'clustermanucr.vb0auoq.mongodb.net'

const URL = `mongodb+srv://${db_User}:${db_Password}@${db_Host}/${db_Name}?retryWrites=true&w=majority` // regresa una promesa


/**
 * Modelo (Termino especifico de mongoose)
 * enbloba  una coneccion 
 *  Es una interfaz para comunicarnos con la BD
 *      --crear
 *      --actulizar
 *      --editar
 *      --consultar
 * 
 * hacer referencia a una coleccion
 * 
 * Para crear un modelo necesitamos un esquema o schema
 * 
 * Schema:
 *      Nos permitira definir la estructura de los docuementos
 *          -- Campos (name, lastname, age,..)
 *          -- Validaciones (requerido, )
 *          -- Restricciones
 */

// Schema de koders

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        enum:['h', 'm'] // que valores son validos para este campo, el enum va a permitir conceptos validos para un campo
    },

    isGraduate: {
        type: Boolean,
        default: false  //  tenga un valor por defecto
    }
})

//Crear el modelo

const Koder = mongoose.model('koders', koderSchema)



mongoose.connect(URL) // regresa una promesa
    .then(async (conecction) =>{
        console.log('Database connected :D');

        //Obtener todos los koders
        const allKoders = await Koder.find({}) //Todas las acciones que se hagan a una base de datos son asincronas y regresa una promesa
        console.log(allKoders);

        // crear un koder
        const newKoder = {
            name: 'Fanny',
            lastName: 'Leyva',
            age: 19,
            gender: 'm'
        }

        // const koderCreated = await Koder.create(newKoder)
        // console.log(koderCreated);

        // Actualizar un koder
        const newData = {
            lastName:'Leyva Leyva'
        }
        // const koderUpdated = await Koder.findByIdAndUpdate('633e38ee4047cd42f89178aa', newData,{new: true})
        // console.log('Koder updated');
        // console.log(koderUpdated);

        // const koderDeleted = await Koder.findByIdAndDelete('633e38ee4047cd42f89178aa')
        // console.log('Koder deleted');
        // console.log(koderDeleted);
    })
    .catch((error) =>{
        console.log('Error: ', error);
    })



