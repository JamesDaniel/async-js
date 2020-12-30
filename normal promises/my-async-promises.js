const fs = require('fs');

function getMyAsyncPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('./test.txt', 'utf8', (err, data) => {
            resolve(data);
        });
    });
}

function myAsyncFunction() {
    return getMyAsyncPromise();
}

async function getThePromiseReturned() {
    return getMyAsyncPromise();
}

async function promiseAll() {
    const promises = [];
    promises.push(getMyAsyncPromise());
    promises.push(getMyAsyncPromise());
    return await Promise.all(promises);
}

module.exports.myAsyncFunction = myAsyncFunction;
module.exports.getThePromiseReturned = getThePromiseReturned;
module.exports.promiseAll = promiseAll;

