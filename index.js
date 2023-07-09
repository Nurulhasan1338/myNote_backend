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

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})