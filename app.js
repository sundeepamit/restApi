const express = require('express')
const feedRoutes = require('./routes/feed')

const app = express()

app.use('/feed', feedRoutes)

app.get('/', (req, res, next) => {
    res.send('index page')
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('listening on port 8080')
})