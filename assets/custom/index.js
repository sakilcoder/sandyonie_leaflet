// 1. suicide count
// 2. suicide rate
// 3. attempt rate
// 4. gender ratio

let suicideLayer = L.layerGroup();
let suicideRateLayer = L.layerGroup();
let attemptRateLayer = L.layerGroup();
let genderRatioLayer = L.layerGroup();

let activeLayer = 1;

var map = L.map('map', {
    layers: [noBasemap, suicideLayer],
}).setView([-3, 113.9213], 5);
map.options.minZoom = 2;
map.options.maxZoom = 8;

basemapCarto.addTo(map);

L.easyButton('fa-home fa-lg', function () {
    map.setView([-3, 113.9213], 5);
}).addTo(map);

// addSuicideLayer();
addSuicideRateLayer();
addAttemptRateLayer();
addGenderRatioLayer();

let overlays ={};
// overlays['Suicide'] = suicideLayer;
overlays['Suicide Rate'] = suicideRateLayer;
overlays['Attempt Rate'] = attemptRateLayer;
overlays['Gender Ratio'] = genderRatioLayer;

var layerControl = L.control.layers(overlays).addTo(map);

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info legend');
    this.update();
    return this._div;
};

let getSuicideCountLegend = function(){
    let labels = [];
    let from, to;
    str = '<h6 align="center">Suicide Counts</h6>';
    for (var i = 0; i < suicideCountLegendValues.length; i++) {
        from = suicideCountLegendValues[i];
        to = suicideCountLegendValues[i + 1];

        labels.push(
            '<i style="background:' + suicideCountColor(from + 1) + '"></i> ' +
            from + '' + (to ? ' &ndash; ' + to + '' : '+'));
    }
    str += labels.join('<br>');
    // console.log(str);
    return str;
}
let getSuicideRateLegend = function(){
    let labels = [];
    let from, to;
    str = '<h6 align="center">Suicide Rate</h6>';
    for (var i = 0; i < suicideRateLegendValues.length; i++) {
        from = suicideRateLegendValues[i];
        to = suicideRateLegendValues[i + 1];

        labels.push(
            '<i style="background:' + suicideRateColor(from+.01) + '"></i> ' +
            from + '' + (to ? ' &ndash; ' + to + '' : '+'));
    }
    str += labels.join('<br>');
    // console.log(str);
    return str;
}
let getAttemptRateLegend = function(){
    let labels = [];
    let from, to;
    str = '<h6 align="center">Attempt Rate</h6>';
    for (var i = 0; i < attemptRateLegendValues.length; i++) {
        from = attemptRateLegendValues[i];
        to = attemptRateLegendValues[i + 1];

        labels.push(
            '<i style="background:' + attemptRateColor(from + .0001) + '"></i> ' +
            from + '' + (to ? ' &ndash; ' + to + '' : '+'));
    }
    str += labels.join('<br>');
    // console.log(str);
    return str;
}
let getGenderRatioLegend = function(){
    let labels = [];
    let from, to;
    str = '<h6 align="center">Gender Ratio</h6>';
    for (var i = 0; i < genderRatioLegendValues.length; i++) {
        from = genderRatioLegendValues[i];
        to = genderRatioLegendValues[i + 1];

        labels.push(
            '<i style="background:' + genderRatioColor(from + 1) + '"></i> ' +
            from + '' + (to ? ' &ndash; ' + to + '' : '+'));
    }
    str += labels.join('<br>');
    // console.log(str);
    return str;
}


legend.update = function (props) {
    let str = '';
    if(activeLayer==1){
        str += getSuicideRateLegend();
    }else if(activeLayer==2){
        str += getAttemptRateLegend();
    }else if(activeLayer==3){
        str += getGenderRatioLegend();
    }
    this._div.innerHTML = str;
};

legend.addTo(map);

map.on('baselayerchange', function (e) {
    if(e.name=='Suicide Rate'){
        activeLayer = 1;
    }else if(e.name=='Attempt Rate'){
        activeLayer = 2;
    }else if(e.name=='Gender Ratio'){
        activeLayer = 3;
    }
    legend.update();
});
