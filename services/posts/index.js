const {randomBytes } = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
//middleware


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts',(req,res,next)=>{
    res.send(posts);
});

app.post('/posts',async  (req,res,next)=>{
    const id = randomBytes(4).toString('hex');
    const {title }  = req.body;
    posts[id] = {
        id,
        title
    }
    const event = {
        name : 'postCreated',
        data : posts[id]
    }
    await axios.post('http://localhost:5000/events',event);
    return res.status(201).send(posts[id]);

});


app.post('/events',(req,res,next)=>{
    res.send({});})

app.listen(4000,()=>{
    console.log('listening on 4000');
});