app.controller("mobilectrl",($scope,myservice)=>{
	console.log("My Service ",myservice);
	var pr = myservice.callServer();
	pr.then(function(data){
		$scope.result = data;
	},function(err){
		$scope.err = err;
	})
});
app.service("myservice",function($http,$q,MOBILE_URL){
	//return{
		this.callServer=function(){
		//callServer(){
			//var url = ;
			var defered = $q.defer();
			$http.get(MOBILE_URL).then(function(data){
				defered.resolve(data);
			},function(err){
				defered.reject(err);
			});
			return defered.promise;
		}
		
	//}
});

//app.factory("myfactory",($http,$q,MOBILE_URL)=>{
//	return{
//		callServer(){
//			//var url = ;
//			var defered = $q.defer();
//			$http.get(MOBILE_URL).then(function(data){
//				defered.resolve(data);
//			},function(err){
//				defered.reject(err);
//			})
//			return defered.promise;
//		}
//		
//	}
//})
