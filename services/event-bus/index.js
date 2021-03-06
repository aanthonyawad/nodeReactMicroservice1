const {randomBytes } = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
//middleware


const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post('/events', (req,res)=>{

    events.push(req.body);


    axios.post('http://localhost:4000/events',req.body);
    axios.post('http://localhost:4001/events',req.body);
    axios.post('http://localhost:4002/events',req.body);

    res.send({status: 'OK'});
});


app.get('/events',(req,res,next)=>{
    res.send(events);
});




app.listen(5000,()=>{
    console.log('listening on 5000');
});