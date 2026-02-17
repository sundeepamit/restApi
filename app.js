const express = require('express')
const feedRoutes = require('./routes/feed')

const app = express()

app.use(express.json()) //parse json req body data
// fixing the CORS error
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    })
    next()
})
app.use('/feed', feedRoutes)

app.listen(8080, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('listening on port 8080')
})