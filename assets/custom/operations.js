const csvUrl = 'assets/data/data.csv';

const fetchText = async (url) => {
    const response = await fetch(url);
    return await response.text();
}

let addSuicideLayer = function(){
    suicideLayer = L.geoJson(indonesia, {
        style: suicideCountStyle,
        onEachFeature: onEachsuicideCount,
    }).addTo(map);  
}

let addSuicideRateLayer = function(){
    suicideRateLayer = L.geoJson(indonesia, {
        style: suicideRateStyle,
        onEachFeature: onEachsuicideRate,
    }).addTo(map);
    map.fitBounds(suicideRateLayer.getBounds());
}

let addAttemptRateLayer = function(){
    attemptRateLayer = L.geoJson(indonesia, {
        style: attemptRateStyle,
        onEachFeature: onEachAttemptRate,
    });  
}

let addGenderRatioLayer = function(){
    genderRatioLayer = L.geoJson(indonesia, {
        style: genderRatioStyle,
        onEachFeature: onEachGenderRatio,
    });  
}

