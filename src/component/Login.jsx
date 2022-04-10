import {useEffect} from "react";
const Login = () => {
    useEffect(() => {
        const url = window.location.href;
        console.log(url);
        const hasCode = url.includes("?code=");
        if(hasCode) {
            const newUrl = url.split("?code=");
            console.log(newUrl);
            const requestData = {
                code: newUrl[1]
            }
            fetch(process.env.REACT_APP_PROXY_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
                .then((response) => {
                    console.log(response.json())
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },[])
    return(
        <div>

        </div>
    )
}

export default Login;