import {html, render} from '../node_modules/lit-html/lit-html.js';

const articleTemplate = (data) => html`
    <article>
        <input type="text" ?disabled=${data.disabled}/>
        <h3>${data.title}</h3>
        <div class=${data.color}>
            <p>${data.content}</p>
        </div>
        <footer>Author: ${data.author}</footer>
    </article>`

start()

async function start() {
    const data = await (await fetch('./data.json')).json()
    const main = document.querySelector('main')
    const renderBtn = document.querySelector('#renderBtn')
    renderBtn.addEventListener('click', onRender)

    document.getElementById('changeBtn').addEventListener('click', onChange)

    function onRender() {
        data[0].author += 1
        const result = data.map(articleTemplate)
        render(result, main)
    }

    function onChange() {
        data.shift()

        data.unshift({
            "title": "First Article 2",
            "content": "Test na Jorko",
            "author": "Jorko Jorkov"
        })

        onRender()
    }
}

