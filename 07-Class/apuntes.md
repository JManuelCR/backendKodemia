# APIS

Aplication program interface

se onforman por un header y un body
    en el header se concentra el main info
    el body se manda la data de http result

un api result se usa paa trasmitrir información a traves de hipermedios, especificamente un JSON el main teme aplication-JSON par transferir datos atraves de una api result
para mandar informacion a travez de una aplicacion es con JSON
los metodos HTTP nos sirven par obtener, enviar, remplazar y borrar para ofrecernos¿ operciones bien definidas

        el metodo patch que nos sirve para actualizar parcialmente un documento, no lo va a atualizar por completo solamente un tipo especifico del archivo
        el metodo put por ejemplo.
        Hay malas practicas que las generen con un mismo metoo en algunas apis, por ejemplo querer actualizar algo y manarlo en un get.
        Ya hay metodos que sirven para ser implementados asi que hay que hacer uso de ellos para lo que estan construidos.

dentro de HTTP nos dan los metodos pero tambien nos dan los estados HTTP
    100 to 199
    200 to 299 satisfactorios
    300 to 399 redirecciones
    400 to 499 respuestas de cliente
    400 Not fount
    500 respuesta no 