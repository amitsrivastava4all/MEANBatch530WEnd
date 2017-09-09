// Singleton Object

const crudOperations = {
	postList:[],
	id:1,
	addPost(post, img, postBy){
		var postObject = new Post(this.id, post, img, postBy);
		this.postList.push(postObject);
		this.id++;
	},
	togglePost(postId){
		this.searchPost(postId)[0].toggleMark();
		
	},
	countMark(){
		return this.postList.filter((postObject)=> postObject.markForDelete).length;
	},
	deleteMark(){
		this.postList = this.postList.filter((postObject)=>postObject.markForDelete==false);
	},
	searchPost(postId){
		var subArray = this.postList.filter(function(obj){
			return obj.id ==postId;
		});
		return subArray;
	},
	updateLike(postId){
		/*var arr = this.searchPost(postId);
		var obj = arr[0];
		var likeCount = obj.incrementLike();
		return likeCount;*/
		return this.searchPost(postId)[0].incrementLike();
	},
	updatePost(){

	},
	deletePost(){
		
	},
	sortById(){
		
	}
	
}