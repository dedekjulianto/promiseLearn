const doFetch = (url) => fetch(url)
.then(result => result.json())

let urls = [
	"https://jsonplaceholder.typicode.com/posts/1",
	"https://jsonplaceholder.typicode.com/posts/2",
	"https://jsonplaceholder.typicode.com/posts/3",
	"https://jsonplaceholder.typicode.com/posts/4"
]

let promise = [];

urls.map((url) => {
	promise.push(doFetch(url));
})

Promise.all(promise).then(result => console.log(result));