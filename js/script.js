let inn = document.getElementById('geo');

function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	let lng = position.coords.longitude;
  let lat = position.coords.latitude;
	inn.innerHTML = 'Широта: ' + lat + '<br> Долгота: ' + lng;
}
