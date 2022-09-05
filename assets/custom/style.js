
var styleAoi = {
    weight: 1,
    color: "#FF10F0",
    opacity: 1,
    fillColor: "#F7CCAC",
    fillOpacity: 0
}

// ------------------ 1. Vision Style -----------------------------

suicideCountLegendValues = [
    0, 10, 20, 30, 50, 60, 100, 500, 800, 1000
]

function suicideCountColor(d) {
    return d > suicideCountLegendValues[9] ? '#7c0000' : // 27% +
        d > suicideCountLegendValues[8] ? '#8e0000' : // 24% - 27%
            d > suicideCountLegendValues[7] ? '#a00000' : // 21% - 24%
                d > suicideCountLegendValues[6] ? '#b20000' : // 18% - 21%
                    d > suicideCountLegendValues[5] ? '#b91919' : // 15% - 18%
                        d > suicideCountLegendValues[4] ? '#c13232' : // 12% - 15%
                            d > suicideCountLegendValues[3] ? '#c94c4c' : // 9% - 12%
                                d > suicideCountLegendValues[2] ? '#d06666' : // 6% - 9%
                                    d > suicideCountLegendValues[1] ? '#d87f7f' : // 3% - 6%
                                        d > suicideCountLegendValues[0] ? '#e09999' : '#f7e5e5'; // 0% - 3% : null
}

function suicideCountStyle(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
        fillColor: suicideCountColor(feature.properties.suicide_counts)
    };
}

// ------------------ 2. Suicide Rate -----------------------------

suicideRateLegendValues = [
    0, .2, .5, .6, 1, 1.5, 2, 4, 6, 7
]

function suicideRateColor(d) {
    return d > suicideRateLegendValues[9] ? '#7c0000' : // 27% +
        d > suicideRateLegendValues[8] ? '#8e0000' : // 24% - 27%
            d > suicideRateLegendValues[7] ? '#a00000' : // 21% - 24%
                d > suicideRateLegendValues[6] ? '#b20000' : // 18% - 21%
                    d > suicideRateLegendValues[5] ? '#b91919' : // 15% - 18%
                        d > suicideRateLegendValues[4] ? '#c13232' : // 12% - 15%
                            d > suicideRateLegendValues[3] ? '#c94c4c' : // 9% - 12%
                                d > suicideRateLegendValues[2] ? '#d06666' : // 6% - 9%
                                    d > suicideRateLegendValues[1] ? '#d87f7f' : // 3% - 6%
                                        d > suicideRateLegendValues[0] ? '#e09999' : '#f7e5e5'; // 0% - 3% : null
}

function suicideRateStyle(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
        fillColor: suicideRateColor(feature.properties.suicide_rate)
    };
}
// ------------------ 3. Attempt Rate -----------------------------

attemptRateLegendValues = [
    0, 5, 7, 10, 12, 15, 20, 25, 30, 80
]

function attemptRateColor(d) {
    return d > attemptRateLegendValues[9] ? '#7c0000' : // 27% +
        d > attemptRateLegendValues[8] ? '#8e0000' : // 24% - 27%
            d > attemptRateLegendValues[7] ? '#a00000' : // 21% - 24%
                d > attemptRateLegendValues[6] ? '#b20000' : // 18% - 21%
                    d > attemptRateLegendValues[5] ? '#b91919' : // 15% - 18%
                        d > attemptRateLegendValues[4] ? '#c13232' : // 12% - 15%
                            d > attemptRateLegendValues[3] ? '#c94c4c' : // 9% - 12%
                                d > attemptRateLegendValues[2] ? '#d06666' : // 6% - 9%
                                    d > attemptRateLegendValues[1] ? '#d87f7f' : // 3% - 6%
                                        d > attemptRateLegendValues[0] ? '#e09999' : '#f7e5e5'; // 0% - 3% : null
}

function attemptRateStyle(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
        fillColor: attemptRateColor(feature.properties.attempt_rate)
    };
}
// ------------------ 4. Gender Ratio -----------------------------

genderRatioLegendValues = [
    0, 1, 1.5, 2, 3, 4, 6, 8, 10, 12
]

function genderRatioColor(d) {
    return d > genderRatioLegendValues[9] ? '#011a7b' : // 27% +
        d > genderRatioLegendValues[8] ? '#1a3088' : // 24% - 27%
            d > genderRatioLegendValues[7] ? '#334795' : // 21% - 24%
                d > genderRatioLegendValues[6] ? '#4d5ea2' : // 18% - 21%
                    d > genderRatioLegendValues[5] ? '#6675af' : // 15% - 18%
                        d > genderRatioLegendValues[4] ? '#808cbd' : // 12% - 15%
                            d > genderRatioLegendValues[3] ? '#99a3ca' : // 9% - 12%
                                d > genderRatioLegendValues[2] ? '#b2bad7' : // 6% - 9%
                                    d > genderRatioLegendValues[1] ? '#ccd1e4' : // 3% - 6%
                                        d > genderRatioLegendValues[0] ? '#e5e8f1' : '#ffffff'; // 0% - 3% : null
}

function genderRatioStyle(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
        fillColor: genderRatioColor(feature.properties.gender_ratio)
    };
}



// ----------------------------------

let GoogleIcon = function (html) {
    return L.divIcon({
        html: html,
        iconSize: [16, 16],
        className: 'my-google-icon'
    });
}

let pngIconStyle = L.Icon.extend({
    options: {
       iconSize: [16, 25]
    }
});

let pngIcon = function (url) {
    return new pngIconStyle({
        iconUrl: url
    })
}