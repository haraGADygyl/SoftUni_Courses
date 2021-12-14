import {html} from '../lib.js'
import {editCar, getCarById} from "../api/data.js";

const editTemplate = (car, onSubmit) => html`
        <section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`

// const editTemplate = (book, onSubmit) => html`
//     <section id="edit-page" class="edit">
//         <form @submit=${onSubmit} id="edit-form" action="#" method="">
//             <fieldset>
//                 <legend>Edit my Book</legend>
//                 <p class="field">
//                     <label for="title">Title</label>
//                     <span class="input">
//                             <input type="text" name="title" id="title" .value=${book.title}>
//                         </span>
//                 </p>
//                 <p class="field">
//                     <label for="description">Description</label>
//                     <span class="input">
//                         <textarea name="description" id="description" .value=${book.description}></textarea>
//                     </span>
//                 </p>
//                 <p class="field">
//                     <label for="image">Image</label>
//                     <span class="input">
//                             <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
//                         </span>
//                 </p>
//                 <p class="field">
//                     <label for="type">Type</label>
//                     <span class="input">
//                             <select id="type" name="type" .value=${book.type}>
//                                 <option value="Fiction" selected>Fiction</option>
//                                 <option value="Romance">Romance</option>
//                                 <option value="Mistery">Mistery</option>
//                                 <option value="Classic">Clasic</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </span>
//                 </p>
//                 <input class="button submit" type="submit" value="Save">
//             </fieldset>
//         </form>
//     </section>`

export async function editPage(ctx) {
    const car = await getCarById(ctx.params.id)
    ctx.render(editTemplate(car, onSubmit))

    async function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const brand = formData.get('brand')
        const model = formData.get('model')
        const description = formData.get('description')
        let year = formData.get('year')
        const imageUrl = formData.get('imageUrl')
        let price = formData.get('price')

        if (brand === '' || model === '' || description === '' || year === '' || imageUrl === '' || price === '') {
            return alert('All fields are required!')
        }

        if (year < 0 || price < 0) {
            return alert('Year and price must be greater than zero')
        }
        year = Number(year)
        price = Number(price)
        await editCar(ctx.params.id, {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        })

        ctx.page.redirect('/details/' + ctx.params.id)
    }
}