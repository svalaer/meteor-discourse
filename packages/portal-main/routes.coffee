if Meteor.isClient
	Meteor.startup ->
		Router.configure ->
			layoutTemplate: 'im360_layout'
		# Router.map ->
		# 	@route 'home'
		# 	@route 'docs'
		# 	@route 'downloads'
		# 	@route 'tools'
		# 	@route 'forum'
		# 	@route 'answers'
		Router.route '/', ->
			@render 'im360_layout'
		Router.route '/home', ->
			@render 'home'
		Router.route '/docs', ->
			@render 'docs'
		Router.route '/downloads', ->
			@render 'downloads'
		Router.route '/tools', ->
			@render 'tools'
		Router.route '/blog', ->
			@render 'blog'
		Router.route '/forum', ->
			@render 'forum'
