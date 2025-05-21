// programa-acerca-de.js
var map = L.map('map').setView([4.7423251, -74.115069], 13); // Coordenadas iniciales del mapa

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Coordenadas del polígono (verifica que estén dentro de un área visible)
var latlngs = [
    [4.7423251, -74.115069],
    [4.7435000, -74.114000],
    [4.7450000, -74.113500]
];

// Crear el polígono y agregarlo al mapa
var polygon = L.polygon(latlngs).addTo(map);

// Ajustar el mapa para mostrar todo el polígono
map.fitBounds(polygon.getBounds());