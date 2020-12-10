const { response } = require('express')
const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (require, response) => {
    response.send('Teste docker-composer com nodemon')
})

app.listen(PORT, HOST)


