import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns as townNames} from "./towns.js";

const listTemplate = (towns) => html`
    <ul>
        ${towns.map(town => html`
            <li class=${town.match ? 'active' : ''}>${town.name}</li>`)}
    </ul>`

const towns = townNames.map(town => ({name: town, match: false}))

const root = document.querySelector('#towns')
const input = document.querySelector('#searchText')
const output = document.querySelector('#result')
document.querySelector('button').addEventListener('click', onSearch)

update()

function update() {
    render(listTemplate(towns), root)
}

function onSearch() {
    const match = input.value.trim().toLocaleLowerCase()
    let matches = 0
    for (let town of towns) {
        if (match && town.name.toLocaleLowerCase().includes(match)) {
            town.match = true
            matches++
        } else {
            town.match = false
        }
    }

    output.textContent = `${matches} matches found`
    update()
}