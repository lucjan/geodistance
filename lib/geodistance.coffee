class Geodistance

	radius =
		m : 6371000
		km : 6371
		mi : 3959
		nmi : 3440
	
	constructor: (unit = 'm') ->
		@radius = radius[unit]
	
	calculate: (pointA, pointB) ->
		a = pointA
		b = pointB
		
		~~(2 * @radius * Math.asin(Math.sqrt(Math.pow(Math.sin((a[0] - Math.abs(b[0])) * Math.PI / 180 / 2), 2) + Math.cos(a[0] * Math.PI / 180) * Math.cos(Math.abs(b[0]) * Math.PI / 180) * Math.pow(Math.sin((a[1] - b[1]) * Math.PI / 180 /2), 2))))

module.exports = Geodistance

