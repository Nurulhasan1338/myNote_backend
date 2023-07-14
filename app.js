const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
connectToMongo();  
const app = express()

app.use(cors(
    // {
    //     origin : ["https://my-note-backend-c31y.vercel.app"],
    //     methods : ["POST","GET","PUT","DELETE"],
    //     credentials:true

    // }
));
app.use(express.json());
 
app.use('/api/auth',require('./routes/auth'));
app.use('/api/note',require('./routes/note'));

app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'connected successfully'
  })
})

module.exports = app;