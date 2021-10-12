function toggle() {
    let textElement = document.querySelector('#extra');
    let buttonElement = document.querySelector('.button');

    // if (buttonElement.textContent === 'More') {
    //
    //     buttonElement.textContent = 'Less';
    //     textElement.style.display = 'block';
    // } else {
    //
    //     buttonElement.textContent = 'More';
    //     textElement.style.display = 'none'
    // }

    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More';
    textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
}