app.controller("contactctrl",function($scope,$routeParams){
	$scope.contact= "delhi-7";
	$scope.name = "Brain Mentors "+$routeParams.firstname+" "+$routeParams.lastname;
	
})