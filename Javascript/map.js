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
let hoverCount = 0;     // Counter variable to keep track of the number of hover events



googleMapElement.addEventListener("mouseover", function() {     // Event listener for the "mouseover" event
  
  hoverCount++; // Increment the hover count

  if (hoverCount => 5) {   // Check if the hover count is equal to 5

    // Apply CSS to the div
    googleMapElement.style.backgroundImage = 'url("../Images/ltt.webp")';
    googleMapElement.style.backgroundSize = "cover";
    googleMapElement.style.backgroundRepeat = "no-repeat";

    audio.play();   // Play the audio
    hoverCount = 0;
  }
});