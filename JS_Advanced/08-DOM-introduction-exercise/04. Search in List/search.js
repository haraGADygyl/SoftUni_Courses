function search() {

    let townsElements = document.querySelectorAll('#towns li');
    let searchTextElement = document.querySelector('#searchText');
    let resultElement = document.querySelector('#result');

    let counter = 0;
    for (const townsElement of townsElements) {
        if (townsElement.textContent.includes(searchTextElement.value)) {
            townsElement.style.fontWeight = 'bold';
            townsElement.style.textDecoration = 'underline';
            counter++;
        } else {
            townsElement.style.fontWeight = 'normal';
            townsElement.style.textDecoration = 'none';
        }
    }
    searchTextElement.value = '';
    resultElement.textContent = `${counter} matches found`;

}
