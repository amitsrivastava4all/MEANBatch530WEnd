app.controller("myctrl",function($scope,myfactory){
    $scope.doOperation = function(){
    $scope.result = myfactory.initCap($scope.name);
    }
})