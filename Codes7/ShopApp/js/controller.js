app.controller("myctrl",($scope,myfactory)=>{
	$scope.brand = "Online Shop";
	var promise = myfactory.callServer();
	promise.then(function(data){
		$scope.menudata = data.data.menus;
	},function(err){
		$scope.err = err;
	})
})