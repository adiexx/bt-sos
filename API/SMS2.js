const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    SMS();
    ZAP();
    res.json({SMS});
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

function SMS() {
    const accountSid = 'ACd68e2be3db6bff141af41d5d80668270';
    const authToken = '50fbbe85962926aef0a8b0c90550594a';
    const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'FERIMENTO GRAVE',
        from: '+18638772899',
        to: '+5562996573143'
    })
    .then(message => console.log(message.sid))
    .catch();
}

function ZAP() {
    const accountSid = 'ACd68e2be3db6bff141af41d5d80668270';
    const authToken = '50fbbe85962926aef0a8b0c90550594a';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
        .create({
            body: 'FERIMENTO GRAVE',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+556296573143'
        })
        .then(message => console.log(message.sid))
        .catch();
    }

app.listen(port, '192.168.1.104', () => console.log(`Example app listening on port ${port}!`));

module.exports = SMS;