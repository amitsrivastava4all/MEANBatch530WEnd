window.addEventListener("load",bindEvents);
function bindEvents(){
	document.getElementById("postBt").addEventListener("click",doPost);
	document.getElementById("postDel").addEventListener("click",deleteMarked);
	document.getElementById("postSave").addEventListener("click",save);
	document.getElementById("postLoad").addEventListener("click",load);
	document.getElementById("ajax").addEventListener("click",doAjax);
	
	printCounts();
}


function doAjax(){
	var url = "https://raw.githubusercontent.com/amitsrivastava4all/MEANBatch530WEnd/master/data.json";
	var ser = new XMLHttpRequest();
	ser.open("GET",url);
	ser.onreadystatechange=function(){
		console.log("State ",ser.readyState);
		if(ser.readyState == 4 && ser.status ==200){
			crudOperations.postList = JSON.parse(ser.responseText);
			printTable();
		}
	}
	ser.send(null);
}

function save(){
	if(localStorage){
		localStorage.posts = JSON.stringify(crudOperations.postList);
		alert("Record Saved....");
	}
	else{
		alert("outdated browser...");
	}
}

function load(){
	if(localStorage){
		if(localStorage.posts){
			crudOperations.postList = JSON.parse(localStorage.posts);
			printTable();
		}
		else{
			alert("nothing to load...");
		}
	}
	else{
		alert("outdated browser...");
	}
}

function deleteMarked(){
	crudOperations.deleteMark();
	printTable();
}

function printTable(){
	printCounts();
	document.getElementById("posts").innerHTML="";
	crudOperations.postList.forEach((postObject)=>printRecord(postObject));
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

function updateLike(event){
	var postid = event.srcElement.getAttribute("post-id");
	var likeCount = crudOperations.updateLike(postid);
	console.log("Like Count "+likeCount);
	event.srcElement.nextSibling.innerHTML=likeCount;
}

function createImg(path,fn,id,opr){
	var img =document.createElement("img");
	img.src=path;
	img.addEventListener("click",fn);
	img.setAttribute(opr+"post-id",id);
	img.className="mystyle";
	return img;
	
}

function markRed(event){
	var tr = event.srcElement.parentNode.parentNode;
	tr.classList.toggle("redrow");
	var id = event.srcElement.getAttribute("delpost-id");
	crudOperations.togglePost(id);
	printCounts();
}

function doEdit(){
}

function printCounts(){
	console.log("MARK ",crudOperations.countMark());
	document.getElementById("total").innerHTML=crudOperations.postList.length;
	document.getElementById("marktotal").innerHTML = crudOperations.countMark();
}

function printRecord(postObject){
	printCounts();
	var tbody = document.getElementById("posts");
	var tr= tbody.insertRow();
	var cell = tr.insertCell(0);
	var likeImg = document.createElement("img");
	likeImg.setAttribute("post-id",postObject.id);
	likeImg.src='images/like.png';
	likeImg.className='mystyle';
	likeImg.addEventListener("click",updateLike);
	cell.innerHTML="<img src='"+postObject.img+"'>"+"<br>"+postObject.postName;
	cell.appendChild(likeImg);
	var likeCount = document.createElement("span");
	likeCount.innerHTML = 0;
	cell.appendChild(likeCount);
	
	var delImg = createImg('images/delete.png',markRed,postObject.id,"del");
	var editImg = createImg('images/edit.png',doEdit,postObject.id,"ed");
	cell.appendChild(delImg);
	cell.appendChild(editImg);
	var showComment = document.createElement("span");
	showComment.className = "link";
	
	showComment.innerHTML="Show Comments";
	showComment.addEventListener("click",showCommentBox);
	cell.appendChild(showComment);
	
	tr.insertCell(1).innerHTML=postObject.postBy;
	tr.insertCell(2).innerHTML = postObject.postDate;
	
	
}

function showCommentBox(event){
	
	event.srcElement.innerHTML=`<div>COMMENTS ARE ::: 
			<input type='text'><button>Add</button>
							</div>`;
	
	
	
}