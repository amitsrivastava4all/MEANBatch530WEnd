describe("calc test suite",function(){
    var calc;
    beforeEach(function(){
         calc = new Calc();
    })
    it("should add two number",function(){
           // var calc = new Calc();
            var result = calc.add(10,20);
            expect(result).toBe(30);
    });
    it("should add one number",function(){
           
            var result = calc.add(10);
            expect(result).toBe(10);
    });
})