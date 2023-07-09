const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
connectToMongo();  
const app = express()
const port = 5000;

app.use(cors());
app.use(express.json());
 
app.use('/api/auth',require('./routes/auth'));
app.use('/api/note',require('./routes/note'));

app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'bad request hii nurul'
  })
})

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})