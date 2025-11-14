const ST_ETIENNE_COORDS = [45.43389, 4.39];
const TOP_LEFT_CORNER = L.latLng(45.490346, 4.280691);
const BOTTOM_RIGHT_CORNER = L.latLng(45.372832, 4.497328);

const MAX_ZOOM = 20;
const MIN_ZOOM = 13;

const map = L.map('map', {
	center: ST_ETIENNE_COORDS,
	zoom: MIN_ZOOM,
	maxBounds: L.latLngBounds(TOP_LEFT_CORNER, BOTTOM_RIGHT_CORNER),
	maxBoundsViscosity : 0.6,
	doubleClickZoom: false,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: MAX_ZOOM,
	minZoom: MIN_ZOOM,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(event) {
	L.marker(event.latlng).addTo(map);
}

map.on("click", onMapClick);

