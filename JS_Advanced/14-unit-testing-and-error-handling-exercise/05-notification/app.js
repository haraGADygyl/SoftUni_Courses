function notify(message) {
    let notificationDiv = document.querySelector('#notification');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block';

    let dataNotificationAttribute = notificationDiv.getAttribute('data-notification-set');

    if (dataNotificationAttribute !== 'true') {
        notificationDiv.setAttribute('data-notification-set', 'true');
        notificationDiv.addEventListener('click', notificationDivClickHandler);
    }

    function notificationDivClickHandler(event) {
        let notificationDiv = document.querySelector('#notification');
        notificationDiv.style.display = 'none';
    }
}
