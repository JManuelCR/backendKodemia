entidades
    va a ser la capa más importante de nuestro sistema, tenemos que identificarlas como los objetos o entidades mas importantes para nuestro negocio
    en un ejemplo, en la api de kodemia, las entidades importantes en el sistema serian los koders, los mentores, las clases.
    fungiran una parte importante en el sistema para nuestro negocio
    el modelo de mentores, el modelo de koders hacen referencia a las colecciones de la BD base de datos
    lo podemos encontrar como 

casos de uso:
    Todas las acciones que puede realizar el usuario en el sistema. Son las reglas de negocio que rigen las identidadesd.
    Son las acciones que puede relizar el usuario con las entidades.
    por ejemplo en el caso del koder, el koder puede ver clases, login, registrarse los cuales son casos de uso son las cosas que se llevana acabo mediante codigo

Controllers
    Es la parte logica de lo que se ha realizado y es laparte que se va a extraer
    pueden tener presenters, controllers, gateways.
    Para nosotros los presenters seran los endpoints.

Presenters:
    En este caso seran los endpoints, por ejemplo, GET koders, POST koders

External interfaces

la estructura de mis carpetas sera la siguiente

Api-kodemia/
    index.js --> es el archivo que orquesta todo el inicio de la aplicacion

    sourc/--> se va a encontrar todo, generar todas las partes de la arquitectura
        models --> los modelos de base de dato
        usecases/ --> ver clase, 
        routers/ --> seran los que albergen los endpoints
        middlewares/ --> se guardaran los middlewares
        libs/ -->
        codigo reutilizable a la arquitectura, por ejemplo la coneccion a la base de datos, los accesos seran como las utilidades que seran ocupadas
        server.js --> se definira todas las configuraciones de mi servidor, ya sea que sean middlewares


