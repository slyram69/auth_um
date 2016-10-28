// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1140186632732111', // your App ID
		'clientSecret' 	: 'ebd43bc218682c6036b8b41d4e112788', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'Q3YgSlT5tUNPizfUfaENhSO6b',
		'consumerSecret' 	: 's09w8Xhq3rjPT7i5eQqfm3MQzK6OhZtF4s2ufTFKII1y3gpyro',
		'callbackURL' 		: 'http://localhost:3000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
