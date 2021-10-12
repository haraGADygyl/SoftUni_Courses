function addItem() {
    let textAreaElement = document.querySelector('#newItemText');
    let listElements = document.querySelector('#items');

    let newListElement = document.createElement('li');
    newListElement.textContent = textAreaElement.value;
    listElements.appendChild(newListElement);

    textAreaElement.value = '';
}