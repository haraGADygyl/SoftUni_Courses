function sumTable() {

    let allTd = document.querySelectorAll('td:nth-child(2)');

    let sum = 0;
    for (const td of allTd) {
        if (typeof td.textContent == 'string') {
            sum += Number(td.textContent);
        }
    }

    document.querySelector('#sum').textContent = sum;
}