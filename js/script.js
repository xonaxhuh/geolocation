let inn = document.getElementById('geo');

function btn() {
	navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
}

function showPosition(position) {
	inn.innerHTML = 'Широта: ' + position.coords.latitude + '<br> Долгота: ' + position.coords.longitude;
}

function errorHandler() {
	inn.innerHTML = 'Ошибка';
}
