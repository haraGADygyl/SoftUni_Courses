function solve() {

    let buttonElement = document.querySelector(".admin-view button")

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()

        let lectureNameElement = document.querySelector("input[type=text]")
        let lectureDateElement = document.querySelector("input[type=datetime-local]")
        let lectureModulesElement = document.querySelector("section.admin-view.section-view select")

        if (!lectureNameElement.value || !lectureDateElement.value) {
            return;
        }

        if (lectureModulesElement.value === 'Select module') {
            return;
        }

        let lectureElement = createLecture(lectureNameElement.value, lectureDateElement.value)
        let moduleElement = createModule(lectureModulesElement.value, lectureElement)

        let modulesElement = document.querySelector('.modules')
        modulesElement.appendChild(moduleElement)



    })

    function createModule(name, lectureElement) {
        let divElement = document.createElement('div')
        divElement.classList.add('module');

        let headingElement = document.createElement('h3')
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        let lectureListElement = document.createElement('ul');
        lectureListElement.appendChild(lectureElement)

        divElement.appendChild(headingElement);
        divElement.appendChild(lectureListElement);

        return divElement
    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${formatDate(date)}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }
}