app.controller("mobilectrl",($scope,myfactory)=>{
	var pr = myfactory.callServer();
	pr.then(function(data){
		$scope.result = data;
	},function(err){
		$scope.err = err;
	})
});
app.factory("myfactory",($http,$q)=>{
	return{
		callServer(){
			var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
			var defered = $q.defer();
			$http.get(url).then(function(data){
				defered.resolve(data);
			},function(err){
				defered.reject(err);
			})
			return defered.promise;
		}
		
	}
})
