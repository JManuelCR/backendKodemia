const http = require('http')

//recibe un requestlistener
const server = http.createServer((request,response) =>{
const url = request.url;
console.log('url: ', url);
const method = request.method;
console.log('Method: ', method);
// en el browser solo podemos hacer petciones get


    response.write('hola desde mi servidor :D');
    response.end(); //cerremos la respuesta
})

//poniendo a ecuchar a un ouerto al server

/**
 * 8080 --> hambiente de desarrollo
 * http --> 80
 * https --> 443
 * ssh --> 22
 */
server.listen(8080, () => {
    console.log('Server listening on port 8080');
})