import * as api from './api/data.js'
window.api = api

import {page, render} from './lib.js'
import {loginPage} from "./views/login.js";
import {logout} from "./api/data.js";
import {getUserData} from "./util.js";
import {homePage} from "./views/home.js";
import {catalogPage} from "./views/catalog.js";
import {registerPage} from "./views/register.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myCarsPage} from "./views/my-listings.js";

const root = document.querySelector('#site-content')
document.querySelector('#logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', homePage)
page('/catalog', catalogPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/my-listings', myCarsPage)

updateUserNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav

    next()
}

function updateUserNav() {
    const userData = getUserData()

    if (userData) {
        document.querySelector('#profile').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
        document.querySelector('#profile a').textContent = `Welcome ${userData.username}`
    } else {
        document.querySelector('#profile').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    }
    
}

function onLogout() {
    logout()
    updateUserNav()
    page.redirect('/')
}