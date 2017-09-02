// Singleton Object

const crudOperations = {
	postList:[],
	id:1,
	addPost(post, img, postBy){
		var postObject = new Post(this.id, post, img, postBy);
		this.postList.push(postObject);
		this.id++;
	},
	searchPost(){
		
	},
	updatePost(){

	},
	deletePost(){
		
	},
	sortById(){
		
	}
	
}