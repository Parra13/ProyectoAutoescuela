 $(document).ready(function () {

    $.ajax({
        type: "GET",
        url: 'preguntas y respuestas.xml', //nombre del archivo a leer.
        dataType: "xml",
        success: parse,
        error: function () { alert("Error: algo ha ido mal."); }
    });    

    function parse(document) {
               
        var arraydatos = new Array();               

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


            /*Falta recoger el valor de CADA UNO de los INPUTS*/

    $("#Submit").click(function() {

        for (var i = 1; i < 4 ; i++) {
                    
            var resultadoA = $('#A[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre RespA*/
            var resultadoB = $('#B[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre RespB*/
            var resultadoC = $('#C[name=Pregunta'+i+']:checked').val(); /*Captura el atributo checked del radio button de nombre RespC*/

            if (resultadoA == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                alert($("#A").attr("class"))
            };
            if (resultadoB == 'on') {      //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                alert($("#B").attr("class"))
            };
            if (resultadoC == 'on') {     //Si el valor capturado en la variable antes declarada es "on" se realiza el código dentro de llaves.
                alert($("#C").attr("class"))
            };
        
        };    
    });
});



