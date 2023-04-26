let eb = document.getElementById('geo');

function getLocation() {
		navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	let lng = position.coords.longitude;
  let lat = position.coords.latitude;
	eb.innerHTML = String(lat) + String(lng);
}
