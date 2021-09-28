function extractText() {
    let items = document.getElementById('items').children;

    let result = [];

    for (let item of Array.from(items)) {
        result.push(item.textContent);
    }

    document.getElementById('result').textContent = result.join('\n')
}