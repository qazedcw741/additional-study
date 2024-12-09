const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const post = require('./router/routs')

app.use('/post_page', post);

// app.use(cors())
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/post_page', (req, res) => {
  res.sendFile(__dirname + '/routs.html')
})

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// app.get('/dog', (req, res) => {
//     res.send({'sound' : '멍멍'})
// })

// app.get('/cat', (req, res) => {
//     res.json({'sound' : '야옹'})
// })

app.get('/sound/:name', (req, res) => {
  const {name} = req.params;
  console.log(name);

  if(name == 'dog'){
    res.json({'sound' : '멍멍'})
  } else if(name == 'cat'){
    res.json({'sound' : '야옹'})
  } else if(name == 'duck'){
    res.json({'sound' : '꽥꽥'})
  } else {
    res.json({'sound' : '몰랑'})
  }
  
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q);
    const q = req.query;
    console.log(q);

    res.json({'userID' : q.id})
})


app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('포스트 성공')
})

