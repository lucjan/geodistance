"use strict";
/*
 *  Great-circle distance
 *
 *  A utility to calculate a great-circle distance between two points using a Harvesine formula.
 *
 *  @param Array point A [latitude deg decimal, longitude deg decimal] - default is Edinburgh
 *  @param Array point B [latitude deg decimal, longitude deg decimal] - default is London
 *  @param String length unit: "m" - metre (default), "km" - kilometre,
 */
var geodistance = function(a, b, u) {

    var a = a || [55.949444, -3.160278],
        b = b || [51.507222, -0.1275],
        u = u || "m",
        unit;

    unit = {
        "m" : 6371000,
        "km" : 6371,
        "mi" : 3959,
        "nmi" : 3440
    }

    return unit[u] * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((a[0] - Math.abs(b[0])) * Math.PI / 180 / 2), 2) + Math.cos(a[0] * Math.PI / 180) * Math.cos(Math.abs(b[0]) * Math.PI / 180) * Math.pow(Math.sin((a[1] - b[1]) * Math.PI / 180 / 2), 2)));

};