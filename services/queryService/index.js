const {randomBytes } = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
//middleware


const app = express();
app.use(bodyParser.json());
app.use(cors());

const postData = {}

app.get('posts/comments',(req,res,next)=>{res.end()})



app.post('/events',(req,res,next)=>{
    console.log('recieved event');
    const {name , data} = req.body;
    if(name)
        if(name === 'postCreated'){
            console.log(data);
        }
        else if(name === 'commentCreated'){
            console.log(data);
        }
    res.send({});
})

app.listen(4002,()=>{
    console.log('listening on 4002');
});