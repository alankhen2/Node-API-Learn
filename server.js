require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000
const MONGO_URL = process.env.MONGO_URL;
const productRoute = require('./routes/productRoute')
app.use(express.json())

app.use('/api', productRoute)

//Route
app.get('/', (req, res) => {
    res.send('Helo Node API')
})

app.get('/blog', (req, res) => {
    res.send("HALOO INI BLOG AHAHAHAHAHHAHAH")
})

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`Node API is listening on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})