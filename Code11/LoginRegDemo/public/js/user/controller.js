app.controller("loginctrl",function($scope,userfactory,LOGINURL){
    $scope.login=function(){
        var userid  = $scope.userid;
        var password = $scope.password;
        const userObject = {"userid":userid,"password":password};
        var promise = userfactory.doAjax(LOGINURL,userObject);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        });
    }
   
});

app.controller("registerctrl",function($scope,userfactory,REGISTERURL){
    $scope.register=function(){
        var userid  = $scope.userid;
        var password = $scope.password;
        var username = $scope.username;
        var address = $scope.address;
        const userObject = {"userid":userid,"password":password,"username":username,"address":address};
        
        var promise = userfactory.doAjax(REGISTERURL,userObject);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        });
    }
});