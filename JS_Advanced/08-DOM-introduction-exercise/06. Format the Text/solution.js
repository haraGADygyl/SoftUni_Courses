function solve() {
    let textAreaElement = document.querySelector('#input');
    let outputDivElement = document.querySelector('#output');

    let splitTextArea = textAreaElement.value.split('.')
        .filter(x => x !== '')
        .map(x => x + '.');

    let result = [];
    for (let i = 0; i < splitTextArea.length; i++) {

        result.push(splitTextArea[i]);

        if (result.length === 3 || i === splitTextArea.length - 1) {
            outputDivElement.innerHTML += `<p>${result.join('')}</p>`;
            result = [];
        }
    }
}