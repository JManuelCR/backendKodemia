/*
    Este archivo guardara la definicion del server

        -agregar los middlewares que middlewares va a utilizar -montar los middlewares
        -montar routers      

*/

//definicion de nuestro servidor

import express from 'express'

const server = express()

// middelwares

server.use(express.json())

// routers


//middleware - handleErrors



// Exportar esta servidor



export {server}