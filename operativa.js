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
                    	'<input class="respuestaA" name="sample" type="radio" />' +
                    
                        '<br /> B .- ' + $(arraydatos[i]).find('#b').text() + 
						'<input class="respuestaB" name="sample" type="radio" />' + 
                    
                        '<br /> C .- ' + $(arraydatos[i]).find('#c').text() +
                		'<input class="respuestaC" name="sample" type="radio" />' + '</p>');
                        
                       
            	};
                    
            };

            $("#Submit").click(function() {
             alert($('input[name=sample]:checked').val())
            });
        });



