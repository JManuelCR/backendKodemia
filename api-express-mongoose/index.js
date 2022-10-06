import mongoose from 'mongoose'
import express from 'express'
import * as dotenv from 'dotenv'


dotenv.config()

const {db_User, db_Password,db_Name, db_Host} = process.env

const server = express()

//middleware
server.use(express.json())

server.get('/koders', async (request, response) => {
    const allKoders = await Koder.find({})
    response.json({
        success: true,
        data: {
            koders: allKoders
        }
    })
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
