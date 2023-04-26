let geo_user = document.getElementById('geo');

function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	geo_user.innerHTML = 'Широта: ' + position.coords.latitude + '<br> Долгота: ' + position.coords.longitude;
}
