function colorize() {
    
    let tableRows = document.querySelectorAll('table tr:nth-child(even)');

    for (const row of tableRows) {
        row.style.backgroundColor = 'teal'
    }
}