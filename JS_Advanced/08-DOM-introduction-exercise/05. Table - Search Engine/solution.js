function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let searchFieldElements = document.querySelector('#searchField');
        let rowsElements = document.querySelectorAll('tbody tr');

        for (const rowsElement of rowsElements) {
            if (rowsElement.textContent.includes(searchFieldElements.value)) {
                rowsElement.classList.add("select");
            } else {
                rowsElement.classList.remove('select');
            }
        }
        searchFieldElements.value = '';
    }
}