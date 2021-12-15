import * as api from './api/data.js'
window.api = api

import {page, render} from './lib.js'
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {logout} from "./api/data.js";
import {getUserData} from "./util.js";
import {registerPage} from "./views/register.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {catalogPage} from "./views/catalog.js";


const root = document.querySelector('#main-content')
document.querySelector('#logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/catalog', catalogPage)

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
        document.querySelector('#user').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
        // document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    }
    
}

function onLogout() {
    logout()
    updateUserNav()
    page.redirect('/')
}