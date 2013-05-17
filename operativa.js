 $(document).ready(function () {

var arraydatos = new Array();

    $.ajax({
        type: "GET",
        url: 'preguntas y respuestas.xml', //nombre del archivo a leer.
        dataType: "xml",
        success: parse,
        error: function () { alert("Error: algo ha ido mal."); }
    });    

    function parse(document) {            

        arraydatos = $(document).find("pregunta");

        for (var i = 0; i < arraydatos.length; i++) {
                   
            $("#content").append(

               	'<br/> Enunciado: ' + $(arraydatos[i]).find(':first-child').text() +
                             
               	'<br /> A .- ' + $(arraydatos[i]).find('#a').text() + 
               	'<input id="A" class='+ $(arraydatos[i]).find('#a').attr("class") +' name='+ $(arraydatos[i]).find('#a').attr("nombre") +' type="radio" />' + //Con el atributo class captamos el valor de dicho atributo 
                                                                                                                                                                      //directamente de la etiqueta correspondiente en el XML
                '<br /> B .- ' + $(arraydatos[i]).find('#b').text() +                                                                                         //facilitando así la tarea posterior de contar las respuestas correctas
		      	'<input id="B" class='+ $(arraydatos[i]).find('#b').attr("class") +' name='+ $(arraydatos[i]).find('#b').attr("nombre") +' type="radio" />' + 
                                        
                '<br /> C .- ' + $(arraydatos[i]).find('#c').text() +
           		'<input id="C" class='+ $(arraydatos[i]).find('#c').attr("class") +' name='+ $(arraydatos[i]).find('#c').attr("nombre") +' type="radio" />' + '</p>');
        };
    };

    $("#Submit").click(function correccion() { //La función se disparará al hacer click en el boton "enviar", y se encargará de cotejar las respuestas
                                                   //seleccionadas. Si la respuesta es correcta aumentará el contador, sino pasará a la siguiente.
            
        var ContadorCorrectas = 0;

        for (var i = 1; i <= arraydatos.length ; i++) { 
                    
            var resultadoA = $('#A[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre "Pregunta" + el numero que le corresponde*/
            var resultadoB = $('#B[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre "Pregunta" + el numero que le corresponde*/
            var resultadoC = $('#C[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre "Pregunta" + el numero que le corresponde*/

            if (resultadoA == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $('#A[name=Pregunta'+i+']').attr("class"); //El selector "id" ha de ir seguido del selector "name", sino 
                                                                               //la variable captura el valor de la primera pregunta.
                if (TipoRespuesta == "Correcta") {
                    ContadorCorrectas++;
                };
            };
                
            if (resultadoB == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $('#B[name=Pregunta'+i+']').attr("class"); //El selector "id" ha de ir seguido del selector "name", sino 
                                                                               //la variable captura el valor de la primera pregunta.
                if (TipoRespuesta == "Correcta") {
                    ContadorCorrectas++;
                };
            }; 
                                
            if (resultadoC == 'on') {     //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $('#C[name=Pregunta'+i+']').attr("class"); //El selector "id" ha de ir seguido del selector "name", sino 
                                                                               //la variable captura el valor de la primera pregunta.
                if (TipoRespuesta == "Correcta") {
                    ContadorCorrectas++;
                };
            };    
        };
        
        alert(ContadorCorrectas) //Saca un mensaje dealerta con las respuestas que has acertado.        
    });    
});



