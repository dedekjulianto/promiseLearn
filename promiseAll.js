const getPost = () => fetch("https://jsonplaceholder.typicode.com/posts/1");
const getAuthor = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);
const getComment = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);

var a = getPost().then(res => res.json()); // post
var b = a.then(res => getAuthor(res.id)).then(res => res.json()) // author
var c = a.then(res => getComment(res.id)).then(res => res.json()) // comment

Promise.all( // read all in array
	[a, b, c]
)
.then(res => console.log(res))

.catch(err => console.log("errorr broo!!!", err))