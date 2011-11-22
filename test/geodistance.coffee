vows = require 'vows'
assert = require 'assert'
geodistance = require '../lib/geodistance'

vows
	.describe('Calculate distance between two points')
	.addBatch
	
		'Given a Geodistance module':
			topic: () ->
				new geodistance()
			'exists': (topic) ->
				assert.notEqual null, topic
			'and has a "calculate" method': (topic) ->
				assert.notEqual null, topic.calculate

		'When I set the unit to metres':
			topic: () ->
				new geodistance('m')
			'the Earth radius should equal 6371000 metres': (topic) ->
				assert.equal topic.radius, 6371000
			'and the floored distance between London and Edinburgh should equal 532593 metres': (topic) ->
				assert.equal topic.calculate([55.949444, -3.160278], [51.507222, -0.1275]), 532593
		
		'When I set the unit to kilometres':
			topic: () ->
				new geodistance('km')
			'the Earth radius should equal 6371 kilometres': (topic) ->
				assert.equal topic.radius, 6371
			'and the floored distance between London and Edinburgh should equal 532 kilometres': (topic) ->
				assert.equal topic.calculate([55.949444, -3.160278], [51.507222, -0.1275]), 532
		
		'When I set the unit to miles':
			topic: () ->
				new geodistance('mi')
			'the Earth radius should equal 3959 miles': (topic) ->
				assert.equal topic.radius, 3959
			'and the floored distance between London and Edinburgh should equal 330 miles': (topic) ->
				assert.equal topic.calculate([55.949444, -3.160278], [51.507222, -0.1275]), 330
				
		'When I set the unit to nautical miles':
			topic: () ->
				new geodistance('nmi')
			'the Earth radius should equal 3440 nautical miles': (topic) ->
				assert.equal topic.radius, 3440
			'and the floored distance between London and Edinburgh should equal 287 nautical miles': (topic) ->
				assert.equal topic.calculate([55.949444, -3.160278], [51.507222, -0.1275]), 287
	
	.export(module)