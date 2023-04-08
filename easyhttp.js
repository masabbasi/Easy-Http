class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  //Make an HTTP Request by Get
  getPosts(url, callback) {
    this.http.open("GET", url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback(`Error: ${this.http.status}`);
      }
    };
    this.http.send();
  }

  //Make an HTTP Request by Post
  addPost(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type","application/json");
		this.http.onload = ()=>{
			callback(this.http.responseText);
		}
    this.http.send(JSON.stringify(data));
  }

  //Make an HTTP Request by Put
  updatePost(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type","application/json");
		this.http.onload = ()=>{
			callback(this.http.responseText);
		}
    this.http.send(JSON.stringify(data));
  }

  //Make an HTTP Request by Delete
	deletePost(url, callback) {
    this.http.open("DELETE", url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, "Post Deleted...");
      } else {
        callback(`Error: ${this.http.status}`);
      }
    };
    this.http.send();
  }
}
