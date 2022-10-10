import mongoose from 'mongoose'
import express, { response } from 'express'
import * as dotenv from 'dotenv'
import {koderSchema} from '../api-express-mongoose/koders.model.js'
import {StatusHttp} from '../api-express-mongoose/errorCustom.js'


dotenv.config()

const {db_User, db_Password,db_Name, db_Host} = process.env

const server = express()

//Routers

//query params

//middleware
server.use(express.json())

server.get('/koders', async (request, response) => {
    try {

        const {gender, age} = request.query
        const filters = {}

        if(gender) {
            filters.gender = gender
        }

        if(age) filters.age = age

        console.log(filters);

        const allKoders = await Koder.find({})
        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    }catch (error){
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})


server.post('/koders', async(request, response) => {

    try {
        const {body: newKoder} = request
        const koderCreated = await Koder.create(newKoder)
    
        response.json({
            success: true,
            message: 'Koder creado'
        })
    } catch(error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})



const URL = `mongodb+srv://${db_User}:${db_Password}@${db_Host}/${db_Name}?retryWrites=true&w=majority` // regresa una promesa

mongoose.connect(URL)
    .then((connection) => {
        console.log('Database connected');
        server.listen(8080, () => {
            console.log('Server listening on port 8080');
        })

    })
    .catch((error) => {
        console.log('Erorr: ', error);
    })


    server.get('/koders/:id', async (request, response) => {

        try{
            const {id} = request.params
            const koderFound = await Koder.findById(id)

            console.log(koderFound)

            // if(koderFound){
            //     response.json({
            //         success: false,
            //         message: 'Koder no encontado D:'
            //     })  
            //     return
            // }

            //lanzqar un error --- throw
            if(!koderFound)throw new StatusHttp('koder no encontradoD:', 404)
            
            response.json({
                success: true,
                data: {
                    koder: koderFound
                }
            })
        }catch (error){
            response.status(400).json({
                success: false,
                message: error.message
            })
        }
    })