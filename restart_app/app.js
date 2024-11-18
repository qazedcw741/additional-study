const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(__dirname + '/index.html')
})

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('포스트 성공')
})

