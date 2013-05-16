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
                    	'<input id='+ $(arraydatos[i]).find('#a').attr("class") +' name="sample" type="radio" />' + //Con el atributo class captamos el valor de dicho atributo 
                                                                                                                       //directamente de la etiqueta correspondiente en el XML
                        '<br /> B .- ' + $(arraydatos[i]).find('#b').text() +                                          //facilitando así la tarea posterior de contar las respuestas correctas
						'<input class='+ $(arraydatos[i]).find('#b').attr("class") +' name="sample" type="radio" />' + 
                                        
                        '<br /> C .- ' + $(arraydatos[i]).find('#c').text() +
                		'<input class='+ $(arraydatos[i]).find('#c').attr("class") +' name="sample" type="radio" />' + '</p>');
            	};
                    
            };

            //Este trozo de código no hace lo que debería. Capturar el valor del atributo class.

            $("#Submit").click(function() {
             
             var resultado = $('input[name=sample]:checked').val();
             
             if (resultado == 'on') {
                alert($("#a").val())
                };
             });
});



