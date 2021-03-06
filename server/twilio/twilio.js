const config = require('config')['twilio'];
let client;
if (process.env.TWILIO_ACCOUNTSID) {
  client = require('twilio')(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTHTOKEN);
} else {
  client = require('twilio')(config.accountSID, config.authToken);
}

module.exports.sendSms = (to, message) => {
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: process.env.TWILIO_PHNUMBER || config.number,
    }).then((data) => {
      console.log('Message Sent');
    }).catch((err) => {
      console.error('Error has occurred');
      console.error(err);
    });
};

module.exports.phoneLookup = (phoneNumber) => {
  return client.lookups.v1
    .phoneNumbers(phoneNumber)
    .fetch()
    .then(response => {
      if (response) {
        return response.phoneNumber;
      }
      throw new Error ('invalid number');
    })
    .catch(err => {
      console.log('did this happen?');
      console.error(err);
    });
};