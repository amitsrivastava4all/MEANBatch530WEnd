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

function updateLike(event){
	var postid = event.srcElement.getAttribute("post-id");
	var likeCount = crudOperations.updateLike(postid);
	console.log("Like Count "+likeCount);
	event.srcElement.nextSibling.innerHTML=likeCount;
}

function printRecord(postObject){
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