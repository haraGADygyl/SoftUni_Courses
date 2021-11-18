import {html, render} from './node_modules/lit-html/lit-html.js'
import {styleMap} from './node_modules/lit-html/directives/style-map.js'
import {contacts} from "./contacts.js";

const contactTemplate = (data) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${data.name}</h2>
            <button class="detailsBtn">Details</button>
            <div class="details" id=${data.id}>
                <p>Phone number: ${data.phoneNumber}</p>
                <p>Email: ${data.email}</p>
            </div>
        </div>`


start()

function start() {
    const container = document.querySelector('#contacts')

    container.addEventListener('click', onClick)

    function onClick(event) {
        if (event.target === 'BUTTON') {
            const div = event.target.parentElement.querySelector('.details')

            if (div.style.display === 'block') {
                div.style.display = ''
            } else {
                div.style.display = 'none'
            }

        }

    }

    onRender()


    function onRender() {
        render(contacts.map(c => contactTemplate(c)), container)
    }
}