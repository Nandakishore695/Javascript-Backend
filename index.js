console.log("hello world javacript backend");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/backend',(req, res)=>{
  res.send("Welcome to backend devlopmemnt")
})

app.get('/login', (req, res)=>{
  res.send("<h1>This is loging form</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})