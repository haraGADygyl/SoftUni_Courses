function addItem() {
   
    let text = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = text.value;

    document.getElementById('items').appendChild(liElement);

    text.value = '';
}