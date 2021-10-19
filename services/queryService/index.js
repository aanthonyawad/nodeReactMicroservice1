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

app.get('/posts',(req,res,next)=>{
    res.send(postData);
})

const handleEvents = (name,data)=>{
     if(name)
        if(name === 'postCreated'){
            postData[data.id] = {
                postId: data.id,
                postTitle:data.title,
                comments: []
            }
            console.log(postData);
        }
        else if(name === 'commentCreated'){
            console.log(data);
            if(postData[data.postId])
            {
               postData[data.postId].comments = data.comments; 
            }
            console.log(postData);
        }
}

app.post('/events',(req,res,next)=>{
    console.log('recieved event');
    const {name , data} = req.body;
    handleEvents(name,data);
    res.send({});
})

app.listen(4002,async ()=>{
    console.log('listening on 4002');
    const res = axios.get('http://localhost:5000/events');
    if(res.data)
    for(let result of res.data){
        handleEvents(result.name,result.data);
    } 
});