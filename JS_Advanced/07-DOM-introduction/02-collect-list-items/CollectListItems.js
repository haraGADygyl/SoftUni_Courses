function extractText() {
    
    let content = document.querySelectorAll('#items li')
    let textArea = document.querySelector('#result');
    
    for (const element of content) {
        textArea.textContent += element.textContent + '\n';
    }
}