import {html} from '../lib.js'
import {deleteBook, getBookById} from "../api/data.js";
import {getUserData} from "../util.js";

const detailsTemplate = (book, isOwner, onDelete) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}

<!--                &lt;!&ndash; Bonus &ndash;&gt;-->
<!--                &lt;!&ndash; Like button ( Only for logged-in users, which is not creators of the current book ) &ndash;&gt;-->
<!--                <a class="button" href="#">Like</a>-->

<!--                &lt;!&ndash; ( for Guests and Users )  &ndash;&gt;-->
<!--                <div class="likes">-->
<!--                    <img class="hearts" src="/images/heart.png">-->
<!--                    <span id="total-likes">Likes: 0</span>-->
<!--                </div>-->
<!--                &lt;!&ndash; Bonus &ndash;&gt;-->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>`


export async function detailsPage(ctx) {
    const book = await getBookById(ctx.params.id)

    const userData = getUserData()

    const isOwner = userData && book._ownerId === userData.id

    ctx.render(detailsTemplate(book, isOwner, onDelete))
    
    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${book.title}?`)

        if (choice) {
            await deleteBook(ctx.params.id)
            ctx.page.redirect('/')
        }
    }
}