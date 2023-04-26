let inn = document.getElementById('geo');

function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	inn.innerHTML = 'Широта: ' + position.coords.latitude + '<br> Долгота: ' + position.coords.longitude;
}
