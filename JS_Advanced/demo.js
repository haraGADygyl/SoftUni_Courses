function addHero() {
    let heroNameElement = document.querySelector('#hero-name');
    let heroListElement = document.querySelector('#hero-list');

    let addHeroItem = document.createElement('li');
    addHeroItem.textContent = heroNameElement.value;
    heroListElement.appendChild(addHeroItem);

    heroNameElement.value = '';
}

function deleteHero() {
    let heroListElement = document.querySelector('#hero-list');
    let heroListChildren = heroListElement.children;

    let lastHeroElement = heroListChildren[heroListChildren.length-1];

    lastHeroElement.remove();

    let deleteTextArea = document.querySelector('#delete-hero');
    deleteTextArea.value = '';

}