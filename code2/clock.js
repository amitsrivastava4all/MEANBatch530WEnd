window.addEventListener("load",bindEvents);
var countRef;
var counter;
var isPause = false;
function bindEvents(){
	document.getElementById("start").addEventListener("click",startCountDown);
	document.getElementById("pause").addEventListener("click",pause);
	document.getElementById("stop").addEventListener("click",stopCountDown);
	if(localStorage.count ){
		counter = localStorage.count;
	}
	else{
		counter = 1;
	}
}

function startCountDown(){
	
	countRef = setInterval(function(){
		document.getElementById("countdown").innerHTML = counter;
		counter++;
		localStorage.count = counter;
	},1000);
}
function stopCountDown(){
	clearInterval(countRef);
	document.getElementById("countdown").innerHTML = 0;
}
function pause(){
	
	isPause = !isPause;
	if(isPause){
		clearInterval(countRef);
		document.getElementById("pause").innerHTML = "Resume";
	}
	else{
		startCountDown();
		document.getElementById("pause").innerHTML = "Pause";
	}
	
	//document.getElementById("countdown").innerHTML = 0;
}

