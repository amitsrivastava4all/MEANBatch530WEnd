app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/login",{
        templateUrl:"views/user/login.html",
        controller:"loginctrl"
    }).when("/register",{
        templateUrl:"views/user/register.html",
        controller:"registerctrl"
    }).when("/",{
        templateUrl:"views/home.html"
        
    })
    .otherwise({template:"Error Page , No Match Found"});
});
