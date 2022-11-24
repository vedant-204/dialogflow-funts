const express = require('express')
const bodyParser = require('body-parser')
const {dialogflow, BasicCard, Image, SimpleResponse} = require('actions-on-google')
const router = express.Router()
const app = dialogflow({debug:true})
const eApp = express()

app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hello world !!")
})

app.intent('Show sample', (conv) => {
    conv.ask(new SimpleResponse ({
        speech: 'Here you go',
        text: 'Here your go',
    })); 
});

eApp.get('/', (req, res) => {
    res.send('Hello World');
});

eApp.post('/webhook', app);

eApp.listen(3000)