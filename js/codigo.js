/****/
var parte1 = ['10 increíbles consejos ', '20 trucos fáciles ', '12 secretos ', '3 hacks ', 'Top 10 de trucos ', '5 rituales ', 'Series de TV ', 'Sitios web ', '4 redes sociales '];
var parte2 = ['para enamorar ', 'para perder el tiempo ', 'para ser mas inteligente ', 'para hecerte millonario ', 'para el sexo ', 'para encontar el amor de tu vida ', 'para hacer una fortuna ', 'para ganar más dinero ', 'para ser feliz '];
var parte3 = ['que nunca te contaron.' ,'que no podras creer.', 'que te sorprenderan.', 'que te encanatarán.', 'que te cambiarán la vida.', 'que nunca olvidaras.'];

document.addEventListener('DOMContentLoaded', function() {
	publicarNoticias(100);
}, false);



function obtenerNumeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function escritorDeNoticias() {
	var text1 = parte1[obtenerNumeroAleatorio(0, parte1.length)];
	var text2 = parte2[obtenerNumeroAleatorio(0, parte2.length)];
	var text3 = parte3[obtenerNumeroAleatorio(0, parte3.length)];

	return text1 + text2 + text3;
}

function publicarNoticias(cantidad) {
	var contenidoHTML = "";

	for (var i = 0; i < cantidad; i++) {

		var image = obtenerNumeroAleatorio(1, 7);
		contenidoHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">';
		contenidoHTML += '<img src="images/' + image + '.jpg" alt="image" class="img-fluid">';
		contenidoHTML += '<h5><a href="#">' + escritorDeNoticias() + '</a><h5>';
		contenidoHTML += '</div>';
	}

	document.getElementById('news').innerHTML = contenidoHTML;
}
