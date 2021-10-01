function addItem() {
   
    let text = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = text.value;

    let button = document.createElement('a');
    button.textContent = '[Delete]'
    button.href = '#';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);

    text.value = '';

    function removeElement(ev) {
        let parent = ev.target.parentNode;
        parent.remove();

    }
}