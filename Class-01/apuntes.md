# Archivos y variables que van orientados a la shell

20-09-2022

->Arquitectura de linux
    Esta basada en capaz
        Esta basada trabajaremos en algunas de ellas
        arquitectura limpia
            Cada capa va orientado a una tarea, en el centro esta el hadware
            la parte mecánica de la computadora.
            El sistema operativo 
            es lo que nos ayuda a comunicarnos con los fierros de la computadora
            kernel
            administrar y gestionar recursos, memoria almacenamiento, 
            shell
            Protege es un intermediario entre el krenel y la capa de comunicación, la comunicacion es entre capaz. La capa de aplicación es todo lo que conocemos como aplicaciones, el browser, powerpoint, etc.
            Utilities
            Las utilities son las herramientas o aplicaciones que usamos

            la shell 
            Es esa interfaz que nos permite comunicarnos con con el kernel, en el backend trabajamos con esta capa para controlar mediante aplicaiones el kernel.

            Algo que sucede mucho y nos va a confundir es que LA TERMINAL NO ES LA  SHELL, es una aplicacion, sin embargo la shell son los comandos que s ejecutan dentro de la shell o consola
            Tenemos diferentes tipos de shell, la más común es bash, lo abrimos con bash
            el promt el el simbolo que nos aparece parpadeando al abrir la teminal

            Para saber cual es la shell actual usamos el comando
            echo $SHELL

            Para lsitar las shells disponibles hecemos
            cal /etc/shells

             para cambiar la shell pdemos hacerlo por medio del comando change
            chsh -s /bin/[shell]


            cd change directory, para cambiarnos de directorio
            ls es para listar elementos
            mkdir crear folders
            touch para crear un archivo con .laextension
            pwd para imprimir la ruta donde estamos trabajando
            rm remover
            cp hacer copias 
            mv mover archivos o folders
            estos comandos nos permiten manipular o movernos por el file system

            al colocar una birulilla ~ nos posicionamos sobre al home de la maquina donde nos encontrmos trabajando 

            la diagonal hace referencia al root /

            el punto hace referencia al directorio actual

            .. hace referencia al direcctorio padre
            
            el guion hace referencia a un historial de la ruta anterior

            rutas relativas
                directorio actual
                directorio padre
                home
                ../../my-directory
            rutas absolutas
                son todas las rutas completas empezando desde donde inicia
                /usere/manu/kodemia/backend
            
            Alias
            Son shortcut de comando mas complejos en un comando mas chico
            por ejemplo

            comandos en cadena
            && and
            || or
            ; de coneccion ejecucion de varios comandos en una sola linea

            ejemplo

            mkdir manu && cd manu crear la carpeta y ponerse dentro de ella

            mkdir dir_manu || echo "hola amigo" como aca no tiene errores ejecuta el primero, si el primero tuviera errores salta el primero y ejecuta el segundo

            al operador de conector ejecuta los dos comandos y no le importa si tiene un error o no lo ejecuta y sigue con el que continua hasta abar la cadena de comandos

            .bashrc & .zzshrc

            estar en home y hacer un ls -al y buscar el archivo
            -rw-r--r--  1 manu manu    4147 sep 23 13:31 .zshrc
            -al es par aver todos los archivos incluso los ocultos

            abrir el archivo con code .zshrc

            Recursos
            https://ubuntu.com/tutorial/command-line-for-biginners#1-overwiew
            https://linuxjourney.com/

            Node
            es un runtime, un motor de javascript un v8 mejorado si se podria decir
            tiene un solo hilo de operacion, es un motor mejorado, pero ahora del lado del servidor
            por defecto node se dercaga un manejador de paquetes NPM node package mannager

            nvm --version para saber que version de npm










           






