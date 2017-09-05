class Post
{
	constructor(id, postName, img, postBy){
		this.id = id;
		this.postName = postName;
		this.img = img;
		this.postBy = postBy;
		this.postDate = new Date();
		this.like = 0;
	}
	incrementLike(){
		this.like = this.like+1;
		return this.like;
		
	}
}