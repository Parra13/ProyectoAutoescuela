 $(document).ready(function () {
    
    var arraydatos = new Array(); //Inicializamos el array para que sea una variable global y no haya problemas a la hora de usarla en diferentes funciones.
    
    $.ajax({
        type: "GET",
        url: 'preguntas y respuestas.xml', //nombre del archivo a leer.
        dataType: "xml",
        success: parse,
        error: function () { alert("Error: algo ha ido mal."); }
    });    

    function parse(document) {           

        arraydatos = $(document).find("pregunta");
        var h = 1;
        
        for (var i = 0; i < arraydatos.length; i++) {
            
            $("#content").append(
                
                '<div id="Pregunta'+ h +'">' +
                
                '<b>Pregunta '+h+'</b>' + '</p>' +

               	'<br/> Enunciado: ' + $(arraydatos[i]).find(':first-child').text() +
                             
               	'<br /> A .- ' + $(arraydatos[i]).find('#a').text() + 
               	'<input id="A" class='+ $(arraydatos[i]).find('#a').attr("class") +' name='+ $(arraydatos[i]).find('#a').attr("nombre") +' type="radio" />' + //Con el atributo class captamos el valor de dicho atributo 
                                                                                                                                                                      //directamente de la etiqueta correspondiente en el XML
                '<br /> B .- ' + $(arraydatos[i]).find('#b').text() +                                                                                         //facilitando así la tarea posterior de contar las respuestas correctas
		      	'<input id="B" class='+ $(arraydatos[i]).find('#b').attr("class") +' name='+ $(arraydatos[i]).find('#b').attr("nombre") +' type="radio" />' + 
                                        
                '<br /> C .- ' + $(arraydatos[i]).find('#c').text() +
           		'<input id="C" class='+ $(arraydatos[i]).find('#c').attr("class") +' name='+ $(arraydatos[i]).find('#c').attr("nombre") +' type="radio" />' + '</p>' +
                '</div>');
            h++;
        };
        
    };

    $("#Submit").click(function correccion() { //La función se disparará al hacer click en el boton "enviar", y se encargará de cotejar las respuestas
                                                   //seleccionadas. Si la respuesta es correcta aumentará el contador, sino pasará a la siguiente.
        var ContadorCorrectas = 0;

        for (var i = 1; i <= arraydatos.length ; i++) { 
            /* Captura en una variable si el atributo está "on" */       
            var resultadoA = $('#A[name=Pregunta'+i+']:checked').val(); /*Captura si el atributo checked del radio button de nombre Pregunta + nº está activado*/
            var resultadoB = $('#B[name=Pregunta'+i+']:checked').val(); /*Captura si el atributo checked del radio button de nombre Pregunta + nº está activado*/
            var resultadoC = $('#C[name=Pregunta'+i+']:checked').val(); /*Captura si el atributo checked del radio button de nombre Pregunta + nº está activado*/

            if (resultadoA == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $("#A").attr("class"); //Se captura, en la variable, la class de la pregunta correspondiente en el XML.
                   
                if (TipoRespuesta == "Correcta") { //Si el valor capturado corresponde a respuesta "correcta" se incrementa en 1 el contador de respuestas. 
                    ContadorCorrectas++;
                };
            };
                
            if (resultadoB == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $("#B").attr("class"); //Se captura, en la variable, la class de la pregunta correspondiente en el XML.
                    
                if (TipoRespuesta == "Correcta") { //Si el valor capturado corresponde a respuesta "correcta" se incrementa en 1 el contador de respuestas.
                    ContadorCorrectas++;
                };
            }; 
                                
            if (resultadoC == 'on') {     //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                    
                var TipoRespuesta = $("#C").attr("class"); //Se captura, en la variable, la class de la pregunta correspondiente en el XML.
                    
                if (TipoRespuesta == "Correcta") { //Si el valor capturado corresponde a respuesta "correcta" se incrementa en 1 el contador de respuestas.
                    ContadorCorrectas++;
                };
            };    
        };
        alert(ContadorCorrectas) //Saca un mensaje dealerta con las respuestas que has acertado.        
    });
});



