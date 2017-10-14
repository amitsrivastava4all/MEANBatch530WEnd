describe("Angular things test",function(){
    var factory;
    beforeEach(function(){
        module("myapp");
        inject(function(_myfactory_){
      factory = _myfactory_;
      
  });
    });
  it("check name case is same or not",function(){
      var org = "Amit";
      var name = factory.initCap("AMIT");
      expect(name).toBe(org);
  }) ; 
})