const getPost = () => fetch("https://jsonplaceholder.typicode.com/posts/1");
const getAuthor = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);
const getComment = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);

var a = getPost().then(res => res.json()) // fetch post
var b = a.then(res => getAuthor(res.id)).then(res => res.json()) // fetch author
var c = a.then(res => getComment(res.id)).then(res => res.json()) // fetch comment

a.then(postResponse => {
	b.then(authorResponse => 
		c.then(commentResponse => 
			(
				{ postResponse, authorResponse, commentResponse}
			)
		)
	)
	.then(res => {
		console.log(res.postResponse)
		console.log(res.authorResponse)
		console.log(res.commentResponse)
	})
})
.catch(err => console.log(err));