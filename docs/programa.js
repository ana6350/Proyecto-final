// programa.js
var map = L.map('map').setView([4.7423251, -74.115069], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Añadir un polígono al mapa
var latlngs = [
    [4.7423251, -74.115069],
    [4.7435000, -74.114000],
    [4.7450000, -74.113500]
];
var polygon = L.polygon(latlngs).addTo(map);
map.fitBounds(polygon.getBounds());