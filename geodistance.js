"use strict";
/*
 *  Great-circle distance
 *
 *  A utility to calculate a great-circle distance between two points using a Harvesine formula.
 *
 *  @param Array point A coordinates [latitude deg decimal, longitude deg decimal] - default is Edinburgh
 *  @param Array point B coordinates [latitude deg decimal, longitude deg decimal] - default is London
 *  @param String length unit: "m" - metres (default), "km" - kilometres, "mi" - miles, "nmi" - nautical miles
 */
/*var geodistance = function(a, b, u) {

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
*/
!function() {
	exports.geodistance = (function() {
		
		var R = {
			"m" : 6371000,
	        "km" : 6371,
	        "mi" : 3959,
	        "nmi" : 3440
		}
		
		function Geodistance = function(A, B, U) {
			this.a = A || [55.949444, -3.160278];
			this.b = B || [51.507222, -0.1275];
			this.u = U || "m";
		}
		
		Geodistance.prototype.calculateCoords = function() {
			return R[this.u] * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((this.a[0] - Math.abs(this.b[0])) * Math.PI / 180 / 2), 2) + Math.cos(this.a[0] * Math.PI / 180) * Math.cos(Math.abs(this.b[0]) * Math.PI / 180) * Math.pow(Math.sin((this.a[1] - this.b[1]) * Math.PI / 180 / 2), 2)));
		}
		
		Geodistance.prototype.calculatePostcodes = function() {
			
		}
		
		Geodistance.prototype.calculateRange = function() {
			
		}
		
		return Geodistance;
		
	})();
}.call(this);