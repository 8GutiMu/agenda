var modalEjecutando = function () {
	$('.modal').modal();

	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year
		onStart: () => {
			$('.picker').appendTo('body');
		}
	});

	$('[data-publication]').on('click', function (event) {
		let container = document.getElementById('main');
		let type = $(event.currentTarget).data('publication');
		publish(container, type);
	});
    
}


var funcionAEjecutar = function () {
  // elemento traido a partir de id
  var $contactosForm = $("#agregarContacto");
  // asignacion de evento a dicho elemento
  $contactosForm.submit(agregarContacto);
};

var agregarContacto = function () {
 console.log("hola")    
//  e.preventDefault();
//  // Elementos traido a partir de su id
//  var $contenedor = $("#contactos");
//
//
//  // creacion de elementos
//  var $postContenedor = $("<article/>");
// 
//
//  // personalizacion de elementos creados
//  $postContenedor.addClass("jumbotron");
//
//  // agregar al DOM
//  $($contenedor).append($postContenedor);
//
//  $($mensajeContenedor).val("");
}

$(document).ready(funcionAEjecutar);
$(document).ready(modalEjecutando);