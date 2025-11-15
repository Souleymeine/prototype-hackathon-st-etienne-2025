// ----------- CARTE ----------- //

const ST_ETIENNE_COORDS = [45.43389, 4.39];
const TOP_LEFT_CORNER = L.latLng(45.490346, 4.280691);
const BOTTOM_RIGHT_CORNER = L.latLng(45.372832, 4.497328);

const MAX_ZOOM = 20;
const MIN_ZOOM = 13;


const lyrStreets = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: MAX_ZOOM,
	minZoom: MIN_ZOOM,
	attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});
// https://stackoverflow.com/questions/9394190/leaflet-map-api-with-google-satellite-layer
const lyrSatellite = L.tileLayer("https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
	maxZoom: MAX_ZOOM,
	minZoom: MIN_ZOOM,
	subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
	attribution: "<a href=\"https://about.google/brand-resource-center/products-and-services/geo-guidelines/#required-attribution\">Map data &copy;2025 Google</a>"
});

const map = L.map('map', {
	center: ST_ETIENNE_COORDS,
	zoom: MIN_ZOOM,
	maxBounds: L.latLngBounds(TOP_LEFT_CORNER, BOTTOM_RIGHT_CORNER),
	maxBoundsViscosity: 0.8,
	doubleClickZoom: false,
	layers: [lyrStreets] // Couche par défaut
});

const layerControl = L.control.layers(baseMaps = {
	"OSM": lyrStreets,
	"Satellite": lyrSatellite
}).addTo(map);


// ----------- Epingles ----------- //

function onMapClick(event) {
	L.marker(event.latlng).addTo(map);
}

map.on("contextmenu", onMapClick);

