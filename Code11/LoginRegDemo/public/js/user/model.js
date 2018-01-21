app.factory("userfactory",function($http,$q){
    var object = {
        doAjax(URL,userObject){
            var defer = $q.defer();
            $http.post(URL,userObject).then(function(response){
                defer.resolve(response);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    };
    return object;
});