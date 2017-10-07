app.config(function($routeProvider,$locationProvider,MOBILES,PROFILE){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
        templateUrl:"aboutus.html"
        
    }).when("/contact/:firstname/:lastname",{
		templateUrl:"contactus.html",
		controller:"contactctrl"
	})
	.when(PROFILE,{
		template:"<h1>Profile </h1>"
	})
	.when(MOBILES,{
		templateUrl:"mobiles.html"
	})
	.when("/profile",{
		template:"<h1>Profile </h1>"
	})
	.otherwise({redirectTo:"/"});
	
})