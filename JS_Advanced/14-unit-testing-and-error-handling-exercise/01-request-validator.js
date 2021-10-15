function solve(validObject) {

    validateMethod(validObject);
    validateURI(validObject);
    validateVersion(validObject);
    validateMessage(validObject);

    return validObject;
    
    function validateMethod(validObject) {
        let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if (validObject[propName] === undefined || !validMethod.includes(validObject[propName])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateURI(validObject) {
        let propName = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;

        if (validObject[propName] === undefined || validObject[propName] === '' || !uriRegex.test(validObject[propName])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateVersion(validObject) {
        let propName = 'version';
        let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (validObject[propName] === undefined || !validVersion.includes(validObject[propName])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateMessage(validObject) {
        let propName = 'message';
        let validMessageRegex = /^[^<>\\&'"]*$/;

        if (validObject[propName] === undefined || !validMessageRegex.test(validObject[propName])) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}

try {
    console.log(solve({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '123'
        }
    ))
} catch (e) {
    console.log(e.message);
}

try {
    console.log(solve({
            method: 'OPTIONS',
            uri: 'git.master',
            version: 'HTTP/1.1',
            message: '-recursive'
        }
    ))
} catch (e) {
    console.log(e.message);
}

try {
    console.log(solve({
            method: 'POST',
            uri: 'home.bash',
            message: 'rm -rf /*'
        }
    ))
} catch (e) {
    console.log(e.message);
}