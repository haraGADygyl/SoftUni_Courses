window.addEventListener('load', solution);

async function solution() {

    let url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const response = await fetch(url);
    const articlesList = await response.json();

    articlesList.forEach(value => {
        let id = value._id;
        createArticle(id);
    })

    button();
}

async function createArticle(id) {

    let urlDetails = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id
    const responseDetails = await fetch(urlDetails);
    const article = await responseDetails.json();


    const main = document.getElementById('main')

    main.innerHTML = main.innerHTML +
        `   <div class="accordion">
            <div class="head">
                <span>${article.title}</span>
                <button class="button" id=${article._id}>More</button>
            </div>
            <div class="extra">
                <p>${article.content}</p>
            </div>
        </div>`


}

function button() {
    const mainWindow = document.getElementById('main');
    mainWindow.addEventListener("click", onClick);
    // const paragraph = document.querySelector('p')


    function onClick(ev) {
        let btn = ev.target;
        if (btn.tagName !== 'BUTTON') {
            return
        }

        const div = btn.parentNode.parentNode.querySelector('.extra');
        div.style.display = div.style.display === 'inline' ? 'none' : 'inline';

        if (btn.textContent === 'More') {
            // paragraph.className = 'block'
            btn.textContent = 'Less'
        } else {
            // paragraph.className = 'none'
            btn.textContent = 'More'
        }


    }
}