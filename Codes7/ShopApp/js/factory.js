app.value("URL","https://raw.githubusercontent.com/brainmentorspvtltd/shop/master/menu.json");
app.factory("myfactory",($http,$q,URL)=>{
	return {
		callServer(){
			var defered = $q.defer();
			$http.get(URL).then(function(data){
				defered.resolve(data);
			},function(err){
				defered.reject(err);
			})
			return defered.promise;
		}
	}
})