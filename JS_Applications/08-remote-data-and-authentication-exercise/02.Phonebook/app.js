function attachEvents() {

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadContacts)
    createBtn.addEventListener('click', onCreate)

    phonebookElement.addEventListener('click', onDelete)

    loadContacts()
}

const phonebookElement = document.getElementById('phonebook');
const personElement = document.getElementById('person');
const phoneElement = document.getElementById('phone');

attachEvents();

async function onDelete(event) {
    const id = event.target.dataset.id;
    if (id !== undefined) {
        await deleteContact(id);
        event.target.parentElement.remove()
    }
}

async function onCreate() {
    const person = personElement.value;
    const phone = phoneElement.value;
    const contact = {person, phone}

    const result = await createContact(contact);

    phonebookElement.appendChild(createItem(result));
}

async function loadContacts() {

    const res = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await res.json();

    phonebookElement.textContent = ''

    Object.values(data).map(createItem).forEach(i => phonebookElement.appendChild(i))
}

function createItem(contact) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">Delete</button>`

    return liElement;
}

async function createContact(contact) {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact)
    });
    const result = await res.json();

    return result;
}

async function deleteContact(id) {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete',
    });
    const result = await res.json();

    return result;
}