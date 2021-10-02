function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let infoDif = profile.querySelector('div');

            if (event.target.textContent == 'Show more') {
                infoDif.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}   