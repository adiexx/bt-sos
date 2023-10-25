const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    SMS();
    res.json({SMS});
});

function SMS() {
    const accountSid = 'ACd68e2be3db6bff141af41d5d80668270';
    const authToken = 'db4f97c17941fb612f418b45b9cec809';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
        .create({
            body: 'SOS kkkkk',
            from: '+18638772899',
            to: '+5562996573143'
        }) 
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = SMS;