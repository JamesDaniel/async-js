function myPromiseFunct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('finished my long task');
            resolve('resolve it');
        }, 2000);
    });
}

function returnMeAPromiseSir() {
    console.log('gonna return promise');
    return myPromiseFunct();
}

async function asyncAsIAmYouShallMagicallyGetAPromise() {
    console.log('gonna await promise');
    await myPromiseFunct();
    console.log('awaited boss');
    return "";
}

function returningPromisInAsyncFunctionCraziness() {
    console.log('not awaiting in async and returning a promise');
    myPromiseFunct();
    // return myPromiseFunct();
}

async function returnPromiseAllInAsync() {
    const promises = [];
    promises.push(myPromiseFunct());
    promises.push(myPromiseFunct());
    return Promise.all(promises);
}

module.exports.returnMeAPromiseSir = returnMeAPromiseSir;
module.exports.asyncAsIAmYouShallMagicallyGetAPromise = asyncAsIAmYouShallMagicallyGetAPromise;
module.exports.returningPromisInAsyncFunctionCraziness = returningPromisInAsyncFunctionCraziness;
module.exports.returnPromiseAllInAsync = returnPromiseAllInAsync;
