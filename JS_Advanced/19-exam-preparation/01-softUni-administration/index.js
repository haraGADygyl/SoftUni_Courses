function solve() {

    let buttonElement = document.querySelector('.admin-view .action button');

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()


        let lectureNameElement = document.querySelector('input[type=text]');
        let lectureDateElement = document.querySelector('input[type=datetime-local]');
        let lectureModuleElement = document.querySelector('.admin-view.section-view select');

        if (lectureNameElement.value === '' || lectureDateElement.value === '') {
            return;
        }

        if (lectureModuleElement.value === 'Select module') {
            return;
        }

        // TODO Create lecture

        let lectureElement = createLecture(lectureNameElement.value, lectureDateElement.value);

        // TODO Create module

        let moduleElement = createModule(lectureModuleElement.value, lectureElement)

        let modulesElement = document.querySelector('section.user-view.section-view > div');
        modulesElement.appendChild(moduleElement)

    })

    function createModule(lectureModuleElement, lectureElement) {
        let divElement = document.createElement('div');
        divElement.classList.add('module')

        let h3Element = document.createElement('h3');
        h3Element.textContent = `${lectureModuleElement.toUpperCase()}-MODULE`;

        let ulElement = document.createElement('ul');
        ulElement.appendChild(lectureElement);

        divElement.appendChild(h3Element);
        divElement.appendChild(ulElement);


        return divElement;



    }

    function createLecture(nameElement, dateElement) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let h4Element = document.createElement('h4');
        h4Element.textContent =
            `${nameElement} - ${formatDate(dateElement)}`

        let buttonElement = document.createElement('button');
        buttonElement.classList.add('red');
        buttonElement.textContent = 'Del';

        liElement.appendChild(h4Element);
        liElement.appendChild(buttonElement);

        return liElement;
    }


    function formatDate(dateInput) {
        let [date, hour] = dateInput.split('T');
        date = date.replace('-', '/')
        date = date.replace('-', '/')

        return `${date} - ${hour}`
    }


}