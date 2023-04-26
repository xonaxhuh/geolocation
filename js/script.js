function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	let inn = document.getElementById('geo');
	inn.innerHTML = 'Широта: ' + position.coords.latitude + '<br> Долгота: ' + position.coords.longitude;
}
