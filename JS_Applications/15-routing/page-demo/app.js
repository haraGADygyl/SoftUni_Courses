import page from "//unpkg.com/page/page.mjs";

function homePage(ctx, next) {
    main.innerHTML = '<h2>Home Page</h2><p>Welcome to our site</p>'
}

function catalogPage() {
    main.innerHTML = '<h2>Catalog</h2><p>List of items</p>'
}

function detailPage(ctx) {
    main.innerHTML = '<h2>Product</h2><p>Product details</p><button>Buy Now!</button>'
    document.querySelector('button').addEventListener('click', () => {
        page.redirect('/checkout')
    })
}

function checkoutPage() {
    main.innerHTML = '<h2>Cart details</h2><p>Products list</p>'
}

function aboutPage() {
    main.innerHTML = '<h2>About US</h2><p>Contacts: +35900200111</p>'
}

const views = {
    '/catalog/kitchens': () => '<h2>Kitchen equipment</h2><p>List of items</p>',
}

const main = document.querySelector('main')

page('/home', homePage)
page('/catalog', catalogPage)
page('/catalog/:id', detailPage)
page('/about', aboutPage)
page('/checkout', checkoutPage)

page.redirect('/', '/home')
page.start()
