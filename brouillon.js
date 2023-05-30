 // Map initialization
 var map = L.map('map').setView([18.075277,  -63.060001], 13);
    
 // water color
 var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
 subdomains: 'abcd',
 minZoom: 1,
 maxZoom: 16,
 ext: 'jpg'
});

watercolor.addTo(map)


// Icon 
var myIcon = L.icon({
   iconUrl: 'https://www.voyage-martinique.fr/wp-content/uploads/2021/06/bokit-martinique-500x375.jpg?v=1655648158',
   iconSize: [100,100],
});



// Add an event listener to the marker that shows the popup with custom content when clicked
//marker.on('click', showPopup);


var secondMarker =  L.marker([19.075277,  -64.060001], {icon: myIcon});
var singleMarker = L.marker([18.075277,  -63.060001], {icon: myIcon}).addTo(map);
var trois = L.marker([18.105277,  -63.100001], {icon: myIcon});

var popup = singleMarker.bindPopup('This is a Bokit', {icon: myIcon}).openPopup()
var popup2 = secondMarker.bindPopup('This is a Bokit').openPopup()

popup.addTo(map)
popup2.addTo(map)
trois.addTo(map)
// Layer Controler (idée = les différents endroits controlés avec un zoom automatique)
var layername = {
 "A bokit":secondMarker,
 "another":singleMarker,
 "last":trois
}

//map.removeLayer(singleMarker)
L.control.layers(layername).addTo(map)


console.log(layername.getLatLng())
// GEOJSON 
var mon = L.geoJSON(monument)

mon.addTo(map)





//// LAYER
// Layer Controler (idée = les différents endroits controlés avec un zoom automatique)
var layername = {
   '<img src="https://www.voyage-martinique.fr/wp-content/uploads/2021/06/bokit-martinique-500x375.jpg?v=1655648158" alt="https://www.voyage-martinique.fr/wp-content/uploads/2021/06/bokit-martinique-500x375.jpg?v=1655648158">':secondMarker,
   "another":marker
  }
  
  //ajouter le layers controler open 
  var layerControl = L.control.layers(layername, null, {
   position: 'bottomleft',
   collapsed: false
 }).addTo(map)
 
 // Change the style of Layer control
 var css = '.leaflet-control-layers {  box-shadow: none; border: none; border-radius: 0;background-color: rgba(255, 255, 255, 0.2); }';
 var style = document.createElement('style');
 style.type = 'text/css';
 style.appendChild(document.createTextNode(css));
 document.head.appendChild(style);