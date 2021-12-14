import {html} from '../lib.js'
import {getMyCars} from "../api/data.js";
import {getUserData} from "../util.js";

const myCarsTemplate = (cars) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            
            ${cars.length === 0 
                    ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` 
                    : cars.map(c => myCarTemplate(c))}
        </div>
    </section>`

const myCarTemplate = (car) => html`
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
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`

// const myBooksTemplate = (books) => html`
//     <section id="my-books-page" class="my-books">
//         <h1>My Books</h1>
//         ${books.length === 0
//     ? html`<p class="no-books">No books in database!</p>`
//     : html`<ul class="my-books-list">
//                     ${books.map(b => myBookTemplate(b))}
//                 </ul>`}
//     </section>`
//
// const myBookTemplate = (book) => html`
//     <li class="otherBooks">
//         <h3>${book.title}</h3>
//         <p>Type: ${book.type}</p>
//         <p class="img"><img src=${book.imageUrl}></p>
//         <a class="button" href="/details/${book._id}">Details</a>
//     </li>`

export async function myCarsPage(ctx) {
    const userData = getUserData()
    const cars = await getMyCars(userData.id)

    ctx.render(myCarsTemplate(cars))
}