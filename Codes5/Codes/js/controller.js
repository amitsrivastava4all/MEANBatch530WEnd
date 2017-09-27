//app.controller("computectrl",controllerLogic);
app.controller("computectrl", ($scope,myfactory)=>{
		console.log("Controller Called....");
		$scope.pr =0;
		$scope.qt=0;
		$scope.result = 0;
		$scope.compute=()=>{
			console.log("Compute Call");
			var output = myfactory.calculate($scope.pr, $scope.qt);
			$scope.result = output;
			//$scope.result = $scope.pr * $scope.qt;
		}
	});

//app.controller("computectrl",function ($scope,myfactory){
//		console.log("Controller Called....");
//		$scope.pr =0;
//		$scope.qt=0;
//		$scope.result = 0;
//		$scope.compute=function(){
//			console.log("Compute Call");
//			var output = myfactory.calculate($scope.pr, $scope.qt);
//			$scope.result = output;
//			//$scope.result = $scope.pr * $scope.qt;
//		}
//	});


//function controllerLogic($scope,myfactory){
//		console.log("Controller Called....");
//		$scope.pr =0;
//		$scope.qt=0;
//		$scope.result = 0;
//		$scope.compute=function(){
//			console.log("Compute Call");
//			var output = myfactory.calculate($scope.pr, $scope.qt);
//			$scope.result = output;
//			//$scope.result = $scope.pr * $scope.qt;
//		}
//	}