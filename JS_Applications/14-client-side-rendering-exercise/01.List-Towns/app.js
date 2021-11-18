import {html, render} from './node_modules/lit-html/lit-html.js';

const div = document.querySelector('#root');

document.querySelector('.content').addEventListener('submit', (event) => {
    event.preventDefault();

    const towns = document.querySelector('#towns').value.split(',').map(t => t.trim());
    const result = listTemplate(towns);

    render(result, div);
});

const listTemplate = (towns) => html`
<ul>
    ${towns.map(town => html`<li>${town}</li>`)}
</ul>`;