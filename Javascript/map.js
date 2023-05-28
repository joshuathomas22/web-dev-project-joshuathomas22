const myMap = () => {       // Function to create a map
  var mapProp = {
    center: new google.maps.LatLng(49.098471978152936, -122.7062599561647), // Center of the map
    zoom: 19,   // Zoom level
    mapTypeId: google.maps.MapTypeId.HYBRID,    // Map type
    disableDefaultUI: true   // Disable the default UI
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  new google.maps.Marker({    // Create a marker
    position: { lat: 49.09857852320189, lng: -122.7062599561647 },  // Position of the marker
    map,
    animation: google.maps.Animation.BOUNCE,    // Animation of the marker
    icon: "../Icons/marker.png",    // Icon of the marker
  });

}

const googleMapElement = document.getElementById("googleMap");  // Get the element with the ID "googleMap"
var audio = document.getElementById("hoverSound");  // Get the audio element
let hoverCount = parseInt(localStorage.getItem("hoverCount")) || 0; // Retrieve the hover count from localStorage, or default to 0

// Event listener for the "mouseover" event
googleMapElement.addEventListener("mouseover", function () {
  // Increment the hover count
  hoverCount++;

  // Check if the hover count is greater than or equal to 5
  if (hoverCount >= 10) {
    // Play the audio
    audio.play();

  }

  // Store the updated hover count in localStorage
  localStorage.setItem("hoverCount", hoverCount);
});

// Reset the hover count to 0 when the page is refreshed
window.addEventListener("beforeunload", function () {
  localStorage.removeItem("hoverCount");
});