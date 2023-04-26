let getLocation = () => {

	let out = document.getElementById('geo');

	const succesCallback = (position) => {
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;
		out.innerHTML = "Широта: " + lat + "<br>Долгота: " + lng;
		console.log(position.coords.latitude, position.coords.longitude);
	}

	const errorCallback = (error) => {
		console.error(error);
	}

	navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
}
