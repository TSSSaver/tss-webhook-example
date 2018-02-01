const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const authKey = 'TestKeyHere'

app.post('/webhook' (req, res) => {
    if(req.get('Auth-Key') !== authKey)
        res.status(403).json({error:'Invalid Auth Key'})
    res.json({});
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
