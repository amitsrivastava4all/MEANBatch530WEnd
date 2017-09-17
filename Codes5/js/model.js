//app.factory("myfactory",factoryLogic);
app.factory("myfactory", ()=>{
			console.log("Factory Called");
			var object = {
				calculate(price,quantity){
					console.log("Calc Call");
					return price * quantity;
				},
				computeDiscount(){
					
				}
			}
			return object;
		});
//app.factory("myfactory",function (){
//			console.log("Factory Called");
//			var object = {
//				calculate(price,quantity){
//					console.log("Calc Call");
//					return price * quantity;
//				},
//				computeDiscount(){
//					
//				}
//			}
//			return object;
//		});


//function factoryLogic(){
//			console.log("Factory Called");
//			var object = {
//				calculate(price,quantity){
//					console.log("Calc Call");
//					return price * quantity;
//				},
//				computeDiscount(){
//					
//				}
//			}
//			return object;
//		}