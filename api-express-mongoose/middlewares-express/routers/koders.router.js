import express, { response } from 'express'

const router = express.Router()
router.use((request, response, next) => {
    console.log('Este es un middleware a nivel de router de koders');
    next()
})


function myMiddleware (request, response, next) {
    console.log('Este es un middleware a nivel de endpoint GET');
    next()
}

router.get('/',  (request, response) => {
    try {
        response.json({
            message: 'Aqui estarán los koders'
        })
    }catch (error) {
        response.status(400).json({
            succes: false,
            message: error.message
        })
    }   
})
router.post('/', myMiddleware, (request, response) => {
    try {
        response.json({
            messafe: 'Aqui se crearén los koders'
        })
    }catch (error) {
        response.status(400).json({
            succes: false,
            message: error.message
        })
    }   
})

export default router