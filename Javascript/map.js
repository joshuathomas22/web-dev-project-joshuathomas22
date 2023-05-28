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

// Variables to play a sound when hovering over the map
var element = document.getElementById("googleMap");
var hoverSound = document.getElementById("hoverSound");

element.addEventListener("mouseover", function () { // Play sound when mouse is over the map
    hoverSound.play();  // Play sound
});