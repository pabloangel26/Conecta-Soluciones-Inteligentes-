// Inicializar el mapa
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 15
    });
}

// Obtener la ubicación del usuario y centrar el mapa en esa ubicación
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Centrar el mapa en la ubicación del usuario
            map.setCenter(userLocation);

            // Colocar un marcador en la ubicación del usuario
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: '¡Tu ubicación!'
            });
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // El navegador no admite la geolocalización
        handleLocationError(false, map.getCenter());
    }
}

// Manejar errores de geolocalización
function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización.'
    });
}