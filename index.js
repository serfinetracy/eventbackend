const express = require('express')
const res = require('express/lib/response')
require('./db/mongoose')
const Event=require('./models/event')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json());

app.post('/events',(req,  res)=> {
    const event = new Event(req.body)

    event
    .save()
    .then(()=> (
        res.status(200).send(event)
    ))
    .catch((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log("server is running on port " +  port);
});