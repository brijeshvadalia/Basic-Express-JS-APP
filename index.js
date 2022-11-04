const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res) => {
 res.send('Hello From GITHUB!');
})

app.get('/details',(req , res) => {
    const pDetails = {
        name : 'Brijesh',
        email:'brij@gmail.com',

    };
res.json({pDetails});
})

app.get('/name/:token',(req,res)=>{

    res.send('name :' + req.params.token)

})


app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})