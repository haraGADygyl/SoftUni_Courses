function edit(htmlEl, match, replacer) {
    
    let content = htmlEl.textContent;
    let matcher = new RegExp(match, 'g');
    htmlEl.textContent = content.replace(matcher, replacer);
}