var inn = document.getElementById("geo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    inn.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  inn.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
