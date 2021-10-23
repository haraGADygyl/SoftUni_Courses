window.addEventListener('load', solve);

function solve() {
    
    let buttonElement = document.querySelector("#add-btn");
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()

        let genreOfSongElement = document.querySelector("#genre");
        let nameOfSongElement = document.querySelector("#name");
        let authorOfSongElement = document.querySelector("#author");
        let dateOfCreationElement = document.querySelector("#date");

        if (genreOfSongElement.value === '' || nameOfSongElement.value === '' || authorOfSongElement.value === '' || dateOfCreationElement.value === '') {
            return;
        }

        let imgElement = document.createElement('img');
        imgElement.src = "./static/img/img.png";

        let genreElement = document.createElement('h2');
        genreElement.textContent = `Genre: ${genreOfSongElement.value}`;

        let nameElement = document.createElement('h2');
        nameElement.textContent = `Name: ${nameOfSongElement.value}`;

        let authorElement = document.createElement('h2');
        authorElement.textContent = `Author: ${authorOfSongElement.value}`;

        let dateElement = document.createElement('h3');
        dateElement.textContent = `Date: ${dateOfCreationElement.value}`;

        let saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');
        saveButtonElement.textContent = 'Save song';

        let likeButtonElement = document.createElement('button');
        likeButtonElement.classList.add('like-btn');
        likeButtonElement.textContent = 'Like song';

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete'

        let divElement = document.createElement('div');
        divElement.classList.add('hits-info')

        divElement.appendChild(imgElement);
        divElement.appendChild(genreElement);
        divElement.appendChild(nameElement);
        divElement.appendChild(authorElement);
        divElement.appendChild(dateElement);
        divElement.appendChild(saveButtonElement);
        divElement.appendChild(likeButtonElement);
        divElement.appendChild(deleteButtonElement);

        console.log(divElement)

        let divAllHitsElement = document.querySelector("#all-hits > div")
        divAllHitsElement.appendChild(divElement)


        genreOfSongElement.value = '';
        nameOfSongElement.value = '';
        authorOfSongElement.value = '';
        dateOfCreationElement.value = '';


        let likeSongButtonElement = document.querySelector("#all-hits button.like-btn")
        likeSongButtonElement.addEventListener('click', (e) => {

            let valueLikes = document.querySelector("#total-likes p").textContent.split(': ')
            document.querySelector("#total-likes p").textContent = `Total Likes: ${Number(valueLikes[1]) + 1}`
            likeSongButtonElement.disabled = true;
        })


    })

}