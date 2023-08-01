const express = require('express');
const app = express()
const port = 3000

//Route
app.get('/', (req, res) => {
    res.send('Helo Node API')
})


app.listen(port, () => {
    console.log(`Node API is listening on port ${port}`)
})