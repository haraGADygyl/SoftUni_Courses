function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', getAllPosts);
    document.querySelector('#btnViewPost').addEventListener('click', displayPosts);
}

attachEvents();

function displayPosts() {


    
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
    const data = await res.json();

    return data;

}

async function getComments(postId) {

    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId === postId)

    return comments;

}