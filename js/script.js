let inn = document.getElementById('geo');

function btn() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	inn.innerHTML = 'Широта: ' + position.coords.latitude + '<br> Долгота: ' + position.coords.longitude;
}