const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

app.get('/ping',(req, res)=>{
    res.send('pong')
})

app.get('/',(req, res)=>{
    res.send('hellow world')
})
app.listen(4000, ()=> {
    console.log('listining');
})
