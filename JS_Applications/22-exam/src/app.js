import * as api from './api/data.js'
window.api = api

import {page, render} from './lib.js'
import {homePage} from "./views/home.js";
import {catalogPage} from "./views/catalog.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {logout} from "./api/data.js";
import {getUserData} from "./util.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";

const root = document.querySelector('#main-content')
document.querySelector('#logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', homePage)
page('/catalog', catalogPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)

updateUserNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav
    next()
}

function onLogout() {
    logout()
    updateUserNav()
    page.redirect('/')
}

function updateUserNav() {
    const userData = getUserData()

    if (userData) {
        document.querySelector('#user').style.display = 'inline'
        document.querySelector('#guest').style.display = 'none'
    } else {
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'inline'
    }
}