const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const authKey = 'TestKeyHere'

app.post('/webhook' (req, res) => {
    if(req.get('Auth-Key') !== authKey)
        res.status(403).json({error:'Invalid Auth Key'})

    console.log(req.body)
    /* Example output
    {
        "iPhone8,1": [
            {
                "version": "11.2.5",
                "buildid": "15D60",
                "sha1sum": "2dd3088aab571d5cec22f8d9f84f2077e7b8ba4f",
                "md5sum": "3bd79d43ecd7575ef6e9a6c1ea9d3db2",
                "size": 2660144952,
                "releasedate": "2018-01-23T18:03:45Z",
                "uploaddate": "2018-01-18T21:59:16Z",
                "url": "http://appldnld.apple.com/ios11.2.5/091-61801-20180122-2A16F5D4-FC96-11E7-A44F-D382D1B51909/iPhone_4.7_11.2.5_15D60_Restore.ipsw",
                "signed": true,
                "filename": "iPhone_4.7_11.2.5_15D60_Restore.ipsw"
            }
         ]
    }
    */

    res.json({});
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
