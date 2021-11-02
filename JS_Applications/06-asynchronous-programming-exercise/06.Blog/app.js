function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', getAllPosts);
    document.querySelector('#btnViewPost').addEventListener('click', displayPosts);
}

attachEvents();

async function displayPosts() {

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    postTitle.textContent = 'Loading...';
    postBody.textContent = '';
    ulElement.textContent = '';

    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getComments(selectedId)
    ])

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const res = await fetch(url);
    const data = await res.json();

    const selectElement = document.querySelector('#posts');
    selectElement.textContent = '';
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    })
}

async function getPostById(postId) {

    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;

    const res = await fetch(url);
    return await res.json();
}

async function getComments(postId) {

    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data).filter(c => c.postId === postId);
}