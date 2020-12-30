const assBlock = require('./my-blocking-promises');
const assNonBlock = require('./my-async-promises');

// BLOCKING EXAMPLES
// assBlock.returnMeAPromiseSir()
//     .then((data) => {
//         console.log('got a promise returned\'s then: ' + data);
//     });

// assBlock.asyncAsIAmYouShallMagicallyGetAPromise()
//     .then((data) => {
//         console.log('is there a magic then? ' + data);
//     });

// assBlock.returningPromisInAsyncFunctionCraziness()
//     .then((data) => {
//         console.log('the mystery case right here: ' + data);
//     });

// assBlock.returnPromiseAllInAsync()
//     .then((data) => {
//         console.log(data);
//     });

// NON BLOCKING ASYNC
// assNonBlock.myAsyncFunction()
//     .then((data) => {
//         console.log(data);
//     });

// assNonBlock.getThePromiseReturned()
//     .then((data) => {
//         console.log(data);
//     });

assNonBlock.promiseAll()
    .then((data) => {
        console.log(data);
    });