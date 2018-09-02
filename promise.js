const getPost = () => fetch("https://jsonplaceholder.typicode.com/posts/1");
const getAuthor = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);
const getComment = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id);

getPost() // #1. fetch post
.then(fetchPostResponse => fetchPostResponse.json()) // #2. get & return post json
.then(fetchPostResponse => getAuthor(fetchPostResponse.id) // #3 fetch author
	.then(authorResponse => authorResponse.json()) //#4 get & return author json
		.then(authorResponse => getComment(authorResponse.id) // #5 fetch commet
			.then(commentResponse => commentResponse.json()) // #6 get & return comment json
				.then(commentResponse => { //#7 time to combine all results
					return (
						{ fetchPostResponse, authorResponse, commentResponse } // #8 combine & return all responses
					)
				})
		)
)

	.then(results => { // #9 read all responses
		console.log(results.fetchPostResponse)
		console.log(results.authorResponse)
		console.log(results.commentResponse)
	})

	.catch(error => console.log("errorr broo", error)); // #10 error handling