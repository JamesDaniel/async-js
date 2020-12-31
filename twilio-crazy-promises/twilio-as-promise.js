const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function twilioPromise() {
  return client.messages
    .create({
      body: 'This is the ship... Blah.',
      from: process.env.PHONE_FROM,
      to: process.env.PHONE_TO
    });
}

function sendTwilio() {
  return Promise.all([twilioPromise(), twilioPromise()]);
}

module.exports.sendTwilio = sendTwilio;
