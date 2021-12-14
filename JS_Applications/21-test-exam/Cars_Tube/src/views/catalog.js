import {html} from '../lib.js'
import {getAllCars} from "../api/data.js";

const catalogTemplate = (cars) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
            ${cars.length === 0 
                    ? html`<p class="no-cars">No cars in database.</p>` 
                    : cars.map(c => catalogCard(c))}
        </div>
    </section>`

const catalogCard = (car) => html`
    <div class="listing">
        <div class="preview">
            <img src=${car.imageUrl}>
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`


// const homeTemplate = (books) => html`
//     <section id="dashboard-page" class="dashboard">
//         <h1>Dashboard</h1>
//         ${books.length === 0
//                 ? html`<p class="no-books">No books in database!</p>`
//                 : html`<ul class="other-books-list">
//                     ${books.map(b => bookTemplate(b))}
//                 </ul>`}
//     </section>`
//
// const bookTemplate = (book) => html`
//     <li class="otherBooks">
//         <h3>${book.title}</h3>
//         <p>Type: ${book.type}</p>
//         <p class="img"><img src=${book.imageUrl}></p>
//         <a class="button" href="/details/${book._id}">Details</a>
//     </li>`
export async function catalogPage(ctx) {
    const cars = await getAllCars()
    ctx.render(catalogTemplate(cars))
}