const postsApiUrl = "https://jsonplaceholder.typicode.com/posts";
const newPostOutput = document.getElementById("new-post");

const newPost = {
    userId: 1,
    title: "Fix my bugs",
    completed: false
};

async function addPost() {
    try {
        const response = await fetch(postsApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error(`JSONPlaceholder API error with status ${response.status}`);
        }
        const createdPost = await response.json();
        newPostOutput.textContent = JSON.stringify(createdPost);
    } catch (error) {
        newPostOutput.textContent = `Error: ${error.message}`;
        alert(`Error: ${error.message}`);
    }
}

addPost();
