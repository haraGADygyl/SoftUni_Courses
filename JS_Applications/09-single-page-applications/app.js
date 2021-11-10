const main = document.querySelector('main')
document.querySelector('nav').addEventListener('click', onNavigate)

showSections('homeSection')

function onNavigate(event) {
    if (event.target.tagName === 'BUTTON') {

        switch (event.target.id) {
            case 'homeBtn':
                showSections('homeSection')
                break;
            case 'catalogueBtn':
                showSections('catalogueSection')
                break;
            case 'aboutBtn':
                showSections('aboutSection')
                break;
        }
    }
}

function showSections(sectionId) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none')
    document.querySelector(`#${sectionId}`).style.display = 'block';
}
