function solve() {

    let fields = document.querySelectorAll('#container input');
    let addButton = document.querySelector('#container button');
    let petList = document.querySelector('#adoption ul');
    let adoptedList = document.querySelector('#adopted ul');

    let input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    }

    addButton.addEventListener('click', addPet);

    function addPet(event) {
        event.preventDefault();

        let name = input.name.value;
        let age = Number(input.age.value);
        let kind = input.kind.value;
        let owner = input.owner.value;

        if (name === '' || input.age.value === '' || Number.isNaN(age) || kind === '' || owner === '') {
            return;
        }

        // let pet1 = document.createElement('li');
        // pet1.innerHTML = `
        // <strong>${name}</strong>
        // is a
        // <strong>${age}</strong>
        // years old
        // <strong>${kind}</strong>
        // `

        let contactBtn = e('button', {}, 'Contact with owner');

        let pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ` is a `,
                e('strong', {}, age),
                ` year old `,
                e('strong', {}, kind),
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn,
        )

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet)

        function contact() {

        }

        function e(type, attr, ...content) {
            let element = document.createElement(type);

            for (let prop in attr) {
                element[prop] = attr[prop]
            }

            for (let contentElement of content) {
                if (typeof contentElement === 'string' || typeof contentElement === 'number') {
                    contentElement = document.createTextNode(contentElement)
                }
                element.appendChild(contentElement)
            }

            return element;
        }


        // TODO





    }

}

