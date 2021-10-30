function loadRepos() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;
    const list = document.getElementById('repos');

    fetch(url)
        .then(response => {
            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            return response.json()
        })
        .then(handleResponse)
        .catch(handleError)

    function handleResponse(data) {
        list.innerHTML = '';

        for (const repo of data) {
            const liElement = document.createElement('li');
            liElement.innerHTML = `<a href="${repo.html_url}">
    ${repo.full_name}
</a>`
            list.appendChild(liElement)
        }
    }

    function handleError(error) {
        list.innerHTML = '';
        list.textContent = `${error.message}`
    }
}