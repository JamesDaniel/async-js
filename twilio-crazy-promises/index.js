const twee = require('./twilio-as-promise');

twee.sendTwilio()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })