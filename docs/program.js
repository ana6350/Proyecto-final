var mapContainer = document.getElementById('map');

if (mapContainer) {
    // Inicializa el mapa
    var map = L.map('map').setView([4.7423251, -74.115069], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Si estás en about.html, dibuja el polígono
    if (window.location.pathname.includes("about.html")) {
        var latlngs = [
            [4.7423251, -74.115069],
            [4.7435000, -74.114000],
            [4.7450000, -74.113500],
            [4.7440000, -74.116000],
            [4.7423251, -74.115069] // cierra el polígono
        ];

        var polygon = L.polygon(latlngs, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.4
        }).addTo(map);

        map.fitBounds(polygon.getBounds());
    }
}