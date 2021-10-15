const {randomBytes } = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
//middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:postId/comments',(req,res,next)=>{
    const {postId} = req.params;
    const comments = commentsByPostId[postId];
    if(comments)
        res.send(comments);
    else
        res.status(404).end();
});

app.post('/posts/:postId/comments',async (req,res,next)=>{
    const {postId} = req.params;
    const {comment} = req.body;
    const id = randomBytes(4).toString('hex');
    const comments = commentsByPostId[postId];
    if(comments){
        comments.comments.push(comment);
        comments.length++;
        const event = {
            name : 'commentCreated',
            data : commentsByPostId[postId]
        }
        await axios.post('http://localhost:5000/events',event);

        res.status(201).send(commentsByPostId[postId]);
    }else{
        commentsByPostId[postId] = {
            postId: postId,
            id: id,
            comments:[comment],
            length:1 
        }
        
        const event = {
            name : 'commentCreated',
            data : commentsByPostId[postId]
        }
        await axios.post('http://localhost:5000/events',event);
        res.status(201).send(commentsByPostId[postId]);
    }
      

});

app.post('/events',(req,res,next)=>{
    const {name , data } = req.body;
    if(name ==='commentModerated'){
        console.log(data);
    }
    res.send({});
})

app.listen(4001,()=>{
    console.log('listening on 4001');
});