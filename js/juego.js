var palabra_seleccionada= "";
var errores= 0;
var aciertos=0;
var palabras = [
        "MANZANA",
        "HTML",
        "ALURA",
        "ORACLE",
        "TECLADO",
        "DESIGN",
        "ESTUDIO",
        "JAVA",
        "PYTHON",
        "NARANJA",
        "CARACAS",
        "CORDOBA",
        "BRASIL",
        "MEXICO",
        "CARAMELOS"

] ;

/* Funcion Random */

function id( str ){
    return document.getElementById( str );
}

function obtener_random( num_min, num_max ){
    var amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
    var palabra_al_azar = Math.floor( Math.random( ) * amplitud_valores ) + num_min; /* 5 - 15 = 10 + 5 */
    return palabra_al_azar;
}


var nuevoJuego = id('jugar'); //Iniciar Juego
var imagen = id( 'imagen' ); // imagenes
var btn_letras = document.querySelectorAll( "#letra button" ); // Letras Teclado


/* iniciar juego */

nuevoJuego.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'imagenes/img0.png';
    nuevoJuego.disabled = true;
    errores = 0;
    aciertos = 0; 

    var parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    var resultado = id('resultado').innerHTML = "";

/* Selecciona palabra random */
    var cant_palabras = palabras.length;
    var palabra_al_azar = obtener_random( 0, cant_palabras );

    palabra_seleccionada = palabras[ palabra_al_azar ];
   /* console.log( palabra_seleccionada );*/
    var cant_letras = palabra_seleccionada.length;

/* Teclado desactivado */
    for( var i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }
/* crea los span (guiones) de palabra a adivinar */
    for( var i = 0; i < cant_letras; i++ ){
        var span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
	for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
	}


function click_letras(event){
    var spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    var button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    var letra = button.innerHTML.toUpperCase( ); 
    var palabra = palabra_seleccionada.toUpperCase( ); // .toLowerCase ()

    var acerto = false;
    for( var i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostrarle esta letra...
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        errores++;
        var source = `imagenes/img${errores}.png` ;
        imagen.src = source;
    }

    if( errores == 6 ){
        document.getElementById("resultado").style.color = "#FF0000";
        resultado = id('resultado').innerHTML ="Perdiste, la palabra era " + palabra_seleccionada;
        game_over( );


    }else if( aciertos == palabra_seleccionada.length ){
        document.getElementById("resultado").style.color = "#008000";
        resultado = id('resultado').innerHTML = "FELICITACIONES, GANASTE!! ";
        game_over( );
    }
 	
   /* console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto ); */
}


/* fin del juego */
function game_over( ){
    for( var i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    nuevoJuego.disabled = false;

}


game_over( );

