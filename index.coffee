if Meteor.isClient
	Template.navItems.helpers
		activeIfTemplateIs:(template)->
			currentRoute = Router.current()
			if currentRoute and template == currentRoute.lookupTemplate() then 'active' else ''
