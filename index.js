const map = L.map('map', {
    zoomControl: false
}).setView([51.505, -0.09], 13);


const baseLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// zoom

const control = L.control.zoom({
    zoomInText: '<span aria-hidden="true"> + </span>',
    zoomInTitle: 'Acercar',
    zoomOutText: '<span aria-hidden="true">-</span>',
    zoomOutTitle: 'Alejar',
    position: 'topright'
}).addTo(map);


// console.log(control.getPosition());


// setTimeout(() => {
//     control.setPosition('bottomright');

//     control.remove();
// }, 3000)


// attribution

const attribution = L.control.attribution({
    prefix: 'mi mapa',
    position: 'bottomleft'
}).addTo(map);


// setTimeout(() => {

//     attribution.setPrefix('MI MAPA');

//     attribution.addAttribution('<a href="https://www.github.com">GITHUB</a>')
    

//     setTimeout(() => {
//         attribution.removeAttribution('<a href="https://www.github.com">GITHUB</a>')
//     }, 3000)

// }, 3000)



// LAYERS

map.setView([3.441195, -76.516168], 10)


const marcador = L.marker([3.441195, -76.516168]).addTo(map);
const marcador2 = L.marker([3.550683, -76.769883])


const shadow = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

const baseMaps = {
    "OpenStreetMap": baseLayer,
    "Shadow Map": shadow
}


const overlays = {
    "Marcador 1": marcador,
    "AMarcador 2": marcador2
}

const controlLayers = L.control.layers(baseMaps, overlays, {
    collapsed: false,
    hideSingleBase: true,
    sortLayers: true,
    position: 'topleft'
}).addTo(map);


setTimeout(() => {

    const nuevoMapaBase =  L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    const marcador3 = L.marker([3.775395, -76.496021])


    controlLayers.addBaseLayer(nuevoMapaBase, 'Mi nuevo mapa base');
    controlLayers.addOverlay(marcador3, 'Mi nuevo marcador')


    setTimeout(() => {

        controlLayers.removeLayer(nuevoMapaBase);
        controlLayers.collapse();

    }, 3000)


}, 3000)


// SCALE

const scale = L.control.scale({
    maxWidth: 200,
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(map);


