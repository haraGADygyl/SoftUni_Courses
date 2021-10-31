async function getInfo() {

    const stopId = document.querySelector('#stopId').value;
    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');
    const submit = document.querySelector('#submit');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    submit.disabled = true;

    try {
        stopName.textContent = 'Loading...';
        buses.textContent = '';

        const res = await fetch(url);

        if (res.status !== 200) {
            submit.disabled = false;
            throw new Error(`Fetch error`);
        }

        const data = await res.json();
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            buses.appendChild(liElement);
        })
        submit.disabled = false;
    } catch (error) {
        stopName.textContent = 'Error';
    }
}