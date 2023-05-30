const toggleButton = document.getElementById('toggleButton');
const sidePanel = document.getElementById('sidePanel');

toggleButton.addEventListener('click', () => {
  sidePanel.classList.toggle('active');
});

// Initialize the map
var map = L.map('map').setView([18.06, -63.15], 12.4);

 // water color fond de carte
 var baseLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
 subdomains: 'abcd',
 minZoom: 1,
 maxZoom: 16,
 ext: 'jpg'
});

baseLayer.addTo(map)


/* icone pour la couche "gastronomie*/

  const gastronomie_icon =  L.icon({
    iconUrl: "../Saint-Martin/data/symbole/Symbole_reseaux-05.svg",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [40, 41],
    shadowAnchor: [12, 30],
    shadowSize: [41, 41],
    iconSize: [30, 30]
    });

/* Icone pour la couche pLage */
  var plage_icon = L.icon({

    iconUrl: "../Saint-Martin/data/symbole/Symbole_reseaux-08.svg",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [40, 41],
    shadowAnchor: [12, 30],
    shadowSize: [41, 41],
    iconSize: [30, 30]
    
    });

  /* Icone pour la couche endroit atypique */
  var insolite_icon = L.icon({

    iconUrl: "../Saint-Martin/data/symbole/Symbole_reseaux-06.svg",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [40, 41],
    shadowAnchor: [12, 30],
    shadowSize: [41, 41],
    iconSize: [30, 30]
    });

/* Icone pour la couche terrestre */
  var terrestre_icon = L.icon({

    iconUrl: "../Saint-Martin/data/symbole/Symbole_reseaux-07.svg",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [40, 41],
    shadowAnchor: [12, 30],
    shadowSize: [41, 41],
    iconSize: [30, 30]
    });

            /* Icone pour la couche aquatique */
  var aquatique_icon = L.icon({

    iconUrl: "../Saint-Martin/data/symbole/Symbole_reseaux-09.svg",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [40, 41],
    shadowAnchor: [12, 30],
    shadowSize: [41, 41],
    iconSize: [30, 30]
    });
  
// Mettre les dessins -Fond de carte 

// Le Pic paradis

var picIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-02.svg',
  iconSize:     60, // size of the icon
});

const marker_pic = L.marker([ 18.062, -63.059], {icon: picIcon});
marker_pic.addTo(map);

// La baleine

var baleineIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-03.svg',
  iconSize:     90, // size of the icon
});

const marker_bal = L.marker([ 18.065, -63.189], {icon: baleineIcon});
marker_bal.addTo(map);

// Le pelikan

var pelikanIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-04.svg',
  iconSize:     90, // size of the icon
});

const marker_pel = L.marker([ 18.10, -62.99], {icon: pelikanIcon});
marker_pel.addTo(map);

// Le bateau

var bateauIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-07.svg',
  iconSize:     120, // size of the icon
});

const marker_bateau = L.marker([ 18.05, -62.95], {icon: bateauIcon});
marker_bateau.addTo(map);

// Le dauphin

var dauphinIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-08.svg',
  iconSize:     90, // size of the icon
});

const marker_dauphin = L.marker([ 18.0, -62.99], {icon: dauphinIcon});
marker_dauphin.addTo(map);


// Le palmier

var palmierIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-10.svg',
  iconSize:    90, // size of the icon
});

const marker_palmier = L.marker([ 18.1, -63.04], {icon: palmierIcon});
marker_palmier.addTo(map);

// La tortue

var tortueIcon = L.icon({
  iconUrl: '../Saint-Martin/data/image/dessin-09.svg',
  iconSize:     100, // size of the icon
});

const marker_tortue = L.marker([ 18.0, -63.15], {icon: tortueIcon});
marker_tortue.addTo(map);


///////////////////////////////////
// Pour les Plages
//////////////////////////////////

// Stocker les couches ajoutées dynamiquement dans une variable séparée
const dynamicLayers = [];

// Il n'ya pas de couche selectionnée
let currentLayer = null;

// Fonction pour le contenu du popup
const onEachPopup = function(feature, layer) {

    //pour mettre une image
    var popupContenu = "<p><span style='font-weight:bold;font-size: 20px;color:#9B7750;'>"+ feature.properties.Nom +
    "<p><span style='line-height: 1.5;'>" + feature.properties.Comment +

     "<p>Nom :<img src="+ feature.properties.Nom +" style=width:100px;height:100px;>"+
    // mettre un attribut
    
    "</p>";
      layer.bindPopup(popupContenu,
        // Ajouter un style
        {className: 'stylePopup'});
};


// Pour ajouter un layer en fonction de sa catégorie :
const addLayer = function(categorie) {
    let icon = null; // Définir une variable pour stocker l'icône
    let style = null;

    switch(categorie) {
      case 'plage':
        icon = plage_icon;
        break;
      case 'gastronomie':
        icon = gastronomie_icon;
        break;
      case 'aquatique':
        icon = aquatique_icon;
        break;
      case 'terrestre':
        icon = terrestre_icon;
        break;
      case 'insolite':
        icon = insolite_icon;
        break;
      default:
        break;
    }

  // Afficher toutes les catégories en même temps :
  if (categorie === 'toutes') {
    const layerGroup = L.layerGroup();
    layerGroup.addTo(map);

    for (const cat of ['plage','gastronomie', 'aquatique', 'terrestre', 'insolite']) {

      let icon = null; // Définir une variable pour stocker l'icône
      let style = null;
  
      switch(cat) {
        case 'plage':
          icon = plage_icon;
          break;
        case 'gastronomie':
          icon = gastronomie_icon;
          break;
        case 'aquatique':
          icon = aquatique_icon;
          break;
        case 'terrestre':
          icon = terrestre_icon;
          break;
        case 'insolite':
          icon = insolite_icon;
          break;
        default:
          break;
      }

      const data = eval(cat);
      const geoJSONLayer = L.geoJSON(data, {

        style: style,
        pointToLayer: function(feature, latlng) {
          //Pour changer les icones à adapter of course 
          return L.marker(latlng,
            {icon:icon}
          );
        },
        onEachFeature: onEachPopup,
    
      }); 
      const layer = geoJSONLayer;
      layerGroup.addLayer(layer);
    }
    return layerGroup;

    // Pour une seule catgéorie
  } else {
    const data = eval(categorie);
    const geoJSONLayer = L.geoJSON(data, {

      style: style,
      pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {icon:icon});
      },
      onEachFeature: onEachPopup
    });
    const layer = geoJSONLayer;
    layer.addTo(map);
    dynamicLayers.push(layer); // Ajouter la couche dynamique au tableau des couches dynamiques
    return layer;

  }
};

// Pour enlever les couches lorsqu'un autre bouton est selectionné
const toggleLayer = function(categorie) {
  // Supprimer toutes les couches dynamiques de la carte sauf la nouvelle couche à afficher
  map.eachLayer(function(layer) {
    if (!layer._url && 
      !layer.baseLayer && 
      layer !== currentLayer &&
      layer !== marker_bal &&
      layer !== marker_bateau &&
      layer !== marker_dauphin&&
      layer !== marker_palmier &&
      layer !== marker_palmier &&
      layer !== marker_pel &&
      layer !== marker_tortue &&
      layer !== marker_pic ) { // Vérifier que ce n'est pas un layer de fond de carte
      map.removeLayer(layer);
    }
  });
  // Ajouter la nouvelle couche à afficher
  if (currentLayer) {
    map.removeLayer(currentLayer);
  }
  currentLayer = addLayer(categorie);
};


// Fonction pour le contenu 


// Selectionner tous mes boutons catégories et ...
const layerButtons = document.querySelectorAll('.layer-button');
layerButtons.forEach(function(button) {
  
  button.addEventListener('click', function() {

        // Afficher le layer
        const categorie = button.getAttribute('data-categorie');
        //Supprimer les anciens layer 
        //Tout en gardant le BaseLayer
        toggleLayer(categorie);

    // Actualiser le titre et le contenu et le dessin
    console.log('data-categorie')
    // Récupérer l'élement
    const titre = document.getElementById("titre");
    const contenu = document.getElementById("contenu");
    const dessin = document.getElementById('dessin');

    // Récuperer le nouveau contenu
    const nouveauTitre = button.getAttribute('data-titre');
    const nouveauContenu = button.getAttribute('data-contenu');
    const nouvelleSource = button.getAttribute('image')
    
    dessin.setAttribute('src', nouvelleSource);
    titre.innerHTML = nouveauTitre;
    contenu.textContent = nouveauContenu;
    }
  );
});

// Et si c'est le bouton catégorie qui est selectionné
const toutesButton = document.getElementById('toutes');
toutesButton.addEventListener('click', function() {
  toggleLayer('toutes');
});





  /* Interressant à garder permet d'afficher l'intégralité de la table dans le popup
  if (feature.properties) {
    let popupContent = "<table>";
    for (const [key, value] of Object.entries(feature.properties)) {
      popupContent += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    popupContent += "</table>";
    layer.bindPopup(popupContent);
  }*/





