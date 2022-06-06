function insertar (event) {

    var palabraInsertada = document.querySelector("input").value;
    
    if (palabraInsertada.length === 0 || /^\s+$/.test(palabraInsertada)){
            alert("Maximo 8 letras mayusculas");
            

    } else if (/[^A-Z ]/.test(palabraInsertada)) {

        alert( "Maximo 8 letras mayusculas" );
        document.querySelector("input:first-of-type").value = "";

    // * Si está todo correcto, ejecuta el resto de la función
    } else {
         palabras.push(palabraInsertada);
         obtener_random(palabras);
         console.log(palabraInsertada);
         alert( "Se agrego palabra correctamente");
         document.querySelector("input:first-of-type").value = "";
         location.href='juego.html';        
    }       

    

}

guardar.onclick = insertar;