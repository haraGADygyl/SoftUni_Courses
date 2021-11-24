export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function parseQueryString(queryString) {
    const params = queryString
        .split('&')
        .map(p => p.split('='))
        .reduce((acc, [k, v]) => Object.assign(acc, {[k]: v}), {})

    return params
}
