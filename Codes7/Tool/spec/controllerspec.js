describe("controller test suite",function(){
	beforeEach(module('myapp'));
	var $controller;
	beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
	var factory = {};
	beforeEach(inject(function(_myfactory_){
      factory = _myfactory_;
      
  }));
	it("Should check initcap",function(){
		var myscope={};
		
		$controller('myctrl',{ $scope: myscope , factory:factory });
		myscope.name = "AMIT";
		
		 myscope.doOperation();
		expect(myscope.result).toBe("Amit");
	});
	

});