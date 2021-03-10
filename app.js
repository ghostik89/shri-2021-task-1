const express = require('express')
// init app
const app = express()

// load view engine

//home route
app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(8080, () => {
    console.log('Server started')
})