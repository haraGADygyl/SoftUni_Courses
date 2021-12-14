import {html} from '../lib.js'
import {deleteCar, getCarById} from "../api/data.js";
import {getUserData} from "../util.js";

const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>
                
                <div class="listings-buttons">
                ${isOwner ? html`<a href="/edit/${car._id}" class="button-list">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>` : null}
                </div>
            </div>
        </section>`

// const detailsTemplate = (book, isOwner, onDelete) => html`
//     <section id="details-page" class="details">
//         <div class="book-information">
//             <h3>${book.title}</h3>
//             <p class="type">Type: ${book.type}</p>
//             <p class="img"><img src=${book.imageUrl}></p>
//             <div class="actions">
//                 ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
//                 <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}
//             </div>
//         </div>
//         <div class="book-description">
//             <h3>Description:</h3>
//             <p>${book.description}</p>
//         </div>
//     </section>`

export async function detailsPage(ctx) {
    const car = await getCarById(ctx.params.id)

    const userData = getUserData()
    const isOwner = userData && userData.id === car._ownerId

    ctx.render(detailsTemplate(car, isOwner, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure?')

        if (choice) {
            await deleteCar(ctx.params.id)
            ctx.page.redirect('/catalog')
        }
    }
}