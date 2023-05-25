function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(49.098471978152936, -122.7062599561647),
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapOptions: { disableDefaultUI:true }
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    

    new google.maps.Marker({
        position: { lat: 49.098471978152936, lng: -122.7062599561647 },
        map,
        animation:google.maps.Animation.BOUNCE
    });


}