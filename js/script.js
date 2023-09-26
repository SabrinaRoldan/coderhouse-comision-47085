//Saludo de inicio
alert('Bienvenido a las inscripciones para torneos de fútbol!');

function ingreso(){  
    //datos predefinidos de usuario (se pueden cambiar con la opción n en usuario).  
    let nombreUsuario='sav';
    let passUsuario=123;

    let ingreso=false;
    let intentos=3;

    //Si el ingreso no fue exitoso, va a volver a mostrar el menú principal.
    while(ingreso!=true){
        let esUsuario=prompt('Es un usuario registrado?\n\n-Ingrese "Y/y" si ud es un usuario registrado.\n-Ingrese "N/n" si ud no es un usuario registrado.');
            if(esUsuario.toLowerCase()==='y'){
                for(let i=intentos;i>0;i--){
                    let nombreUsuarioIngreso=prompt('Ingrese su nombre de usuario (Ud tiene '+i+' intentos)');
                    if(nombreUsuarioIngreso==nombreUsuario){
                        for(let i=intentos;i>0;i--){
                            let passUsuarioIngreso=prompt('Ingreso exitoso!\n\nIngrese su contraseña (Ud tiene '+i+' intentos)');
                            if(passUsuario==passUsuarioIngreso){
                                alert('Bienvenido '+nombreUsuario+'!!!');
                                ingreso=true;
                                break;
                            }else{
                                alert('Contraseña incorrecta. Intente nuevamente.');
                            }
                        }
                        break;
                    }else{
                        alert('Usuario incorrecto. Intente nuevamente');
                    }
                }
            }else if(esUsuario.toLowerCase()==='n'){
                let nombreUsuarioNuevo=prompt('Crear nuevo usuario\n\nIngrese su nombre de usuario:');
                nombreUsuario=nombreUsuarioNuevo;
                let passUsuarioNuevo=prompt('Ingrese su contraseña:');
                passUsuario=passUsuarioNuevo;
                alert('Su usuario fue creado con éxito!!!\n\nIngrese sus datos nuevamente.');      
            }else{
                alert('Opción no valida. Vuelva a ingresar nuevamente.');
            }
        }
    return ingreso;
    }

if(ingreso()){
    //Valores predefinidos.
    let torneo=0;
    let titulares=0;
    let suplentes=0;

    let opcion = prompt('Elegí una opción: \n1- Tipo de Torneo. \n2 - Titulares. \n3 - Suplentes. \nPresioná X para finalizar.');

    while (opcion.toLowerCase()!='x') {
        switch (opcion) {
            case '1':
                //Si el tipo de torneo no fue elegido, va a consultar hasta definirlo.
                if(torneo==0){
                    torneo=prompt('Elegí el tipo de torneo para la inscripción:\nOpciones: 5, 8 y 11');
                    while(torneo!=5 && torneo!=8 && torneo!=11){
                        torneo=prompt('Opción inválida!\n\nElegí el tipo de torneo para la inscripción:\nOpciones: 5, 8 y 11');
                    }
                }
                //Una vez que el torneo está definido solo muestra a cual uno está inscripto.
                alert('Estas inscripto en el torneo de fútbol ' + torneo);
                break;
            case '2':
                //Sólo recibe para las opciones de 5, 8 y 11, si elige otro número va directo al else.
                if(torneo==5 || torneo==8 || torneo==11){
                    if(torneo==5){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores titulares ingresados: '+titulares);
                        if(titulares<5){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumTitulares=prompt('Cantidad de jugadores titulares ingresados: '+titulares+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumTitulares.toLowerCase()==='y'){
                                titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                if(Number.isNaN(titularesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((titulares+titularesNuevos)>5){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de jugadores necesarios: 5.'
                                        +'\nCupos disponibles: '+(5-titulares)+'.\nCantidad de jugadores excedidos: '+((titulares+titularesNuevos)-5)+'.');
                                        titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        while(Number.isNaN(titularesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        }
                                    }
                                    titulares=titulares+titularesNuevos;
                                    alert('Titulares agregados correctamente.');
                                }
                            }else if(sumTitulares.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                    if(torneo==8){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores titulares ingresados: '+titulares);
                        if(titulares<8){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumTitulares=prompt('Cantidad de jugadores titulares ingresados: '+titulares+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumTitulares.toLowerCase()==='y'){
                                titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                if(Number.isNaN(titularesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((titulares+titularesNuevos)>8){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de jugadores necesarios: 8.'
                                        +'\nCupos disponibles: '+(8-titulares)+'.\nCantidad de jugadores excedidos: '+((titulares+titularesNuevos)-8)+'.');
                                        titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        while(Number.isNaN(titularesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        }
                                    }
                                    titulares=titulares+titularesNuevos;
                                    alert('Titulares agregados correctamente.');
                                }
                            }else if(sumTitulares.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                    if(torneo==11){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores titulares ingresados: '+titulares);
                        if(titulares<11){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumTitulares=prompt('Cantidad de jugadores titulares ingresados: '+titulares+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumTitulares.toLowerCase()==='y'){
                                titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                if(Number.isNaN(titularesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((titulares+titularesNuevos)>11){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de jugadores necesarios: 11.'
                                        +'\nCupos disponibles: '+(11-titulares)+'.\nCantidad de jugadores excedidos: '+((titulares+titularesNuevos)-11)+'.');
                                        titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        while(Number.isNaN(titularesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            titularesNuevos=parseInt(prompt('Ingresar cantidad de jugadores titulares confirmados:'));
                                        }
                                    }
                                    titulares=titulares+titularesNuevos;
                                    alert('Titulares agregados correctamente.');
                                }
                            }else if(sumTitulares.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                }else{
                    alert('Antes de ingresar jugadores debe de elegir el tipo de torneo. Gracias!');
                }
                break;
            case '3':
                if(torneo==5 || torneo==8 || torneo==11){
                    if(torneo==5){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores suplentes ingresados: '+suplentes);
                        if(suplentes<3){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumSuplentes=prompt('Cantidad de jugadores suplentes ingresados: '+suplentes+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumSuplentes.toLowerCase()==='y'){
                                suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                if(Number.isNaN(suplentesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((suplentes+suplentesNuevos)>3){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de suplentes necesarios: 3.'
                                        +'\nCupos disponibles: '+(3-suplentes)+'.\nCantidad de jugadores excedidos: '+((suplentes+suplentesNuevos)-3)+'.');
                                        suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        while(Number.isNaN(suplentesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        }
                                    }
                                    suplentes=suplentes+suplentesNuevos;
                                    alert('Suplentes agregados correctamente.');
                                }
                            }else if(sumSuplentes.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                    if(torneo==8){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores suplentes ingresados: '+suplentes);
                        if(suplentes<5){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumSuplentes=prompt('Cantidad de jugadores suplentes ingresados: '+suplentes+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumSuplentes.toLowerCase()==='y'){
                                suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                if(Number.isNaN(suplentesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((suplentes+suplentesNuevos)>5){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de suplentes necesarios: 5.'
                                        +'\nCupos disponibles: '+(5-suplentes)+'.\nCantidad de jugadores excedidos: '+((suplentes+suplentesNuevos)-5)+'.');
                                        suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        while(Number.isNaN(suplentesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        }
                                    }
                                    suplentes=suplentes+suplentesNuevos;
                                    alert('Suplentes agregados correctamente.');
                                }
                            }else if(sumSuplentes.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                    if(torneo==11){
                        //Se muestra la cantidad de jugadores anotados y si no se llegó al máximo se consulta para agregar, una vez llenado el cupo, solo muestra el total.
                        alert('Cantidad de jugadores suplentes ingresados: '+suplentes);
                        if(suplentes<6){
                            //Si los anotados son menos de los necesarios, se pueden seguir sumando hasta completar el total.
                            let sumSuplentes=prompt('Cantidad de jugadores suplentes ingresados: '+suplentes+'\n\nDesea agregar más jugadores?\n-Y para sí.\n-N para no.');
                            if(sumSuplentes.toLowerCase()==='y'){
                                suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                if(Number.isNaN(suplentesNuevos)){
                                    alert('El valor ingresado no es un número.');
                                }else{
                                    while((suplentes+suplentesNuevos)>6){
                                        //Si los jugadores ingresados exceden el número necesario, no se suman y pide nuevamente que sean ingresados.
                                        alert('Se ha sobrepasado del máximo de jugadores, por favor, volver a ingresar la cantidad\n\nCantidad máxima de suplentes necesarios: 6.'
                                        +'\nCupos disponibles: '+(6-suplentes)+'.\nCantidad de jugadores excedidos: '+((suplentes+suplentesNuevos)-6)+'.');
                                        suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        while(Number.isNaN(suplentesNuevos)){
                                            alert('El valor ingresado no es un número.');
                                            suplentesNuevos=parseInt(prompt('Ingresar cantidad de jugadores suplentes confirmados:'));
                                        }
                                    }
                                    suplentes=suplentes+suplentesNuevos;
                                    alert('Suplentes agregados correctamente.');
                                }
                            }else if(sumSuplentes.toLowerCase()==='n'){
                                alert('Ha decidido no agregar más jugadores. Gracias!');
                                break;
                            }else{
                                alert('Opción no válida. Vuelva a ingresar nuevamente.');
                                break;
                            }
                        }
                    }
                }else{
                    alert('Antes de ingresar jugadores debe de elegir el tipo de torneo. Gracias!');
                }
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        opcion = prompt('Elegí una opción: \n1- Tipo de Torneo. \n2 - Titulares. \n3 - Suplentes. \nPresioná X para finalizar.');
    }
} else {
    alert('Por favor, volvé a ingresar tus datos para la inscripción.');
}

alert('Hasta luego!');