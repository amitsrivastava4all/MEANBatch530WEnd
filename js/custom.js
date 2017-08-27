var counter = 0;
		 const doOperation=(event)=>{
			 console.log(event.srcElement.innerHTML);
			 var opr = event.srcElement.innerHTML;
			 document.getElementById("count").innerHTML=opr=='+'?++counter:--counter;
		}
function init(){
	var buttons = document.getElementsByTagName("button");
	console.log("Buttons are ",buttons);
	for(let i = 0; i<buttons.length; i++){
		buttons[i].addEventListener("click",doOperation);
	}
}

window.addEventListener("load",init);


		
		/*function plus(){
			counter++;
			document.getElementById("count").innerHTML=counter;
		}
		function minus(){
			counter--;
			document.getElementById("count").innerHTML=counter;
		}*/