const fetch = require("node-fetch")
const express = require('express')
const cors = require('cors')
const FormData = require('form-data')


const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

const clientId = "606f09d9dd417f6bd670"
const clientSecret = "e1a9cf641711fc2f29daaa46b310ed4adb4b9fbb"

app.post('/authenticate', (req, res) => {
    //console.log(req.body);
    const {code} = req.body;
    console.log(code);
    const data = new FormData()
    data.append("client_id", clientId)
    data.append("client_secret", clientSecret)
    data.append("code", code)
    fetch(`https://github.com/login/oauth/access_token`, {
        method: "POST",
        body: data
    }).then((response) => response.text())
        .then((paramString) => {
            let params = new URLSearchParams(paramString)
            console.log(" The params ", params)
            const access_token = params.get("access_token")
            console.log("access_token ", access_token)
            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`
                }
            })
        }).then((response) => response.json())
        .then((response) => {
            console.log(response)
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(400).json(error)
        })
})

app.listen(port, () => {
    console.log(`app listening on the port ${port}`)
})