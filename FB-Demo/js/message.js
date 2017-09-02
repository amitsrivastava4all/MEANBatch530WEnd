window.addEventListener("load",bindEvents);
function bindEvents(){
	document.getElementById("postBt").addEventListener("click",doPost);
}

function doPost(){
	var imgURL = document.getElementById("img").value;
	var post = document.getElementById("post").value;
	crudOperations.addPost(post,imgURL,"Amit");
	var lastAdded = crudOperations.postList[crudOperations.postList.length - 1];
	//console.log(imgURL);
	//console.log(post);
	printRecord(lastAdded);
}

function printRecord(postObject){
	var tbody = document.getElementById("posts");
	var tr= tbody.insertRow();
	var cell = tr.insertCell(0)
	cell.innerHTML="<img src='"+postObject.img+"'>"+"<br>"+postObject.postName;
	tr.insertCell(1).innerHTML=postObject.postBy;
	tr.insertCell(2).innerHTML = postObject.postDate;
	
}