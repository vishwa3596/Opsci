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

app.post('/authenticate', async (req, res) => {
    //console.log(req.body);
    const {code} = req.body;
    console.log(code);
    const data = new FormData()
    data.append("client_id", clientId)
    data.append("client_secret", clientSecret)
    data.append("code", code)
    try {
        const response = await fetch(`https://github.com/login/oauth/access_token`, {
            method: "POST",
            body: data
        })
        if(!response.ok) {
            throw Error(`${response.status} ${response.statusText}`)
        }
        const responseText = await response.text()
        let params = new URLSearchParams(responseText)
        const access_token = params.get("access_token")
        try {
            const userResponse = await  fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`
                }
            })
            if(!userResponse.ok) {
                throw Error(`${userResponse.status} ${userResponse.statusText}`)
            }
            const  userInformation = await userResponse.json();
            console.log(userInformation);
        } catch (error) {
            console.log("Looks like some error in fetching user Information: ", error)
        }

    } catch (error) {
        console.log("Looks like there is a problem ", error)
    }
})

app.listen(port, () => {
    console.log(`app listening on the port ${port}`)
})