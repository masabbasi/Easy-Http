let http = new EasyHTTP();

//Get All Post
http.getPosts("https://jsonplaceholder.typicode.com/posts",function(err,posts){
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});

//Get Single Post
http.getPosts("https://jsonplaceholder.typicode.com/posts/1",function(err,post){
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
})

//Add Post
let data = {
  "userId": 1,
  "id": 101,
  "title": "Masoud Abbasi",
  "body": "MAsoud Masoud\nMasoud Masoud Masoud Masoud\nMasoud Masoud Masoud Masoud Masoud Masoud Masoud Masoud\nMasoud Masoud Masoud"
}
http.addPost("https://jsonplaceholder.typicode.com/posts",data,function(err,post){
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

//Update Post
http.updatePost("https://jsonplaceholder.typicode.com/posts/2",data,function(err,post){
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

//Delete Post
http.deletePost("https://jsonplaceholder.typicode.com/posts/2",function(err,response){
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});