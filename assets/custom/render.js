function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#22FFEE',
        fillOpacity: .5,
        fillColor: '#f22a77'
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

}

// ------------------- 1. Suicide Counts ----------------------------

function resetSuicideCountHighlight(e) {
    suicideLayer.resetStyle(e.target);
}

function onEachsuicideCount(feature, layer) {
    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetSuicideCountHighlight,
    });
    
    var popup = L.popup();
    let strContent = '<h6 style="text-align: center; border-bottom:1px solid; padding-bottom:5px">' + feature.properties.porvince + '</h6>'+
                    '<span class="text-center" >Suicide Count: <b>' + feature.properties.suicide_counts + '</b><br>' +
                    '<span class="text-center" >Suicide Rate: <b>' + feature.properties.suicide_rate + '</b><br>' +
                    '<span class="text-center" >Attempt Rate: <b>' + feature.properties.attempt_rate + '</b><br>' +
                    '<span class="text-center" >Gender Ratio: <b>' + feature.properties.gender_ratio + '</b>' +
                    '</span>';
    popup.setContent(strContent);
    layer.bindPopup(popup, popupOptions);    

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        e.target.closePopup();
    });

}
// ------------------- 2. Suicide Rate  ----------------------------

function resetSuicideRateHighlight(e) {
    suicideRateLayer.resetStyle(e.target);
}

function onEachsuicideRate(feature, layer) {
    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetSuicideRateHighlight,
    });
    
    var popup = L.popup();
    let strContent = '<h6 style="text-align: center; border-bottom:1px solid; padding-bottom:5px">' + feature.properties.porvince + '</h6>'+
                    // '<span class="text-center" >Suicide Count: <b>' + feature.properties.suicide_counts + '</b><br>' +
                    '<span class="text-center" >Suicide Rate: <b>' + feature.properties.suicide_rate + '</b><br>' +
                    'Attempt Rate: <b>' + feature.properties.attempt_rate + '</b><br>' +
                    'Gender Ratio: <b>' + feature.properties.gender_ratio + '</b>' +
                    '</span>';
    popup.setContent(strContent);
    layer.bindPopup(popup, popupOptions);    

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        e.target.closePopup();
    });

}
// ------------------- 3. Attempt Rate  ----------------------------

function resetAttemptRateHighlight(e) {
    attemptRateLayer.resetStyle(e.target);
}

function onEachAttemptRate(feature, layer) {
    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetAttemptRateHighlight,
    });
    
    var popup = L.popup();
    let strContent = '<h6 style="text-align: center; border-bottom:1px solid; padding-bottom:5px">' + feature.properties.porvince + '</h6>'+
                    // '<span class="text-center" >Suicide Count: <b>' + feature.properties.suicide_counts + '</b><br>' +
                    '<span class="text-center" >Suicide Rate: <b>' + feature.properties.suicide_rate + '</b><br>' +
                    'Attempt Rate: <b>' + feature.properties.attempt_rate + '</b><br>' +
                    'Gender Ratio: <b>' + feature.properties.gender_ratio + '</b>' +
                    '</span>';
    popup.setContent(strContent);
    layer.bindPopup(popup, popupOptions);    

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        e.target.closePopup();
    });

}
// ------------------- 4. Gender Ratio ----------------------------

function resetGenderRatioHighlight(e) {
    genderRatioLayer.resetStyle(e.target);
}

function onEachGenderRatio(feature, layer) {
    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetGenderRatioHighlight,
    });
    
    var popup = L.popup();
    let strContent = '<h6 style="text-align: center; border-bottom:1px solid; padding-bottom:5px">' + feature.properties.porvince + '</h6>'+
                    // '<span class="text-center" >Suicide Count: <b>' + feature.properties.suicide_counts + '</b><br>' +
                    '<span class="text-center" >Suicide Rate: <b>' + feature.properties.suicide_rate + '</b><br>' +
                    'Attempt Rate: <b>' + feature.properties.attempt_rate + '</b><br>' +
                    'Gender Ratio: <b>' + feature.properties.gender_ratio + '</b>' +
                    '</span>';
    popup.setContent(strContent);
    layer.bindPopup(popup, popupOptions);    

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        e.target.closePopup();
    });

}
