function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts)
    document.getElementById('btnCreate').addEventListener('click', onCreate)

    list.addEventListener('click', onDelete)

    loadContacts()
}

const list = document.getElementById('phonebook')
const personInput = document.getElementById('person')
const phoneInput = document.getElementById('phone')

attachEvents();

async function onDelete(event) {
    const id = event.target.dataset.id
    if (id !== undefined) {
        await deleteContact(id)
        event.target.parentElement.remove()
    }
}

async function onCreate() {
    const person = personInput.value;
    const phone = phoneInput.value;

    const contact = {person, phone}

    const result = await createContact(contact)

    list.appendChild(createItem(result))

}

async function loadContacts() {
    const url = `http://localhost:3030/jsonstore/phonebook`
    const response = await fetch(url)
    const data = await response.json()

    list.replaceChildren()

    Object.values(data).map(createItem).forEach(i => list.appendChild(i))
}

function createItem(contact) {
    const liElement = document.createElement('li')
    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">Delete</button>`

    return liElement
}

async function createContact(contact) {
    const url = `http://localhost:3030/jsonstore/phonebook`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }
    const response = await fetch(url, options)
    const data = response.json()

    return data
}

async function deleteContact(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/` + id
    const response = await fetch(url, {
        method: 'delete'
    })
    const data = response.json()

    return data
    
}