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
    conv.ask(new BasicCard({
        title: 'Anya',
        image: new Image({
            url: 'https://imgs.search.brave.com/sX_9BVN9mz5_zR_YtiQwWNuX97MxiZAe1hZVV_HdfGo/rs:fit:144:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Yy1neno0eXAxM05f/dkRrMU41Mkh3QUFB/QSZwaWQ9QXBp',
            alt: 'anya',
        })
    }));
})

eApp.get('/', (req, res) => {
    res.send('Hello World')
});

eApp.post('/webhook', app);

eApp.listen(3000, () => {
    console.log('listening on https://localhost:3000')
})