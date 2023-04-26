let eb = document.getElementById('geo');

function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	let lng = position.coords.longitude;
  let lat = position.coords.latitude;
	eb.innerHTML = 'Широта: ' + String(lat) + '<br> Долгота: ' + String(lng);
}
