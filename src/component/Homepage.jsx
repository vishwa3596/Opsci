import axios from "axios";
// client Id-606f09d9dd417f6bd670
// secret key-e1a9cf641711fc2f29daaa46b310ed4adb4b9fbb
const clientId="606f09d9dd417f6bd670"
const HomePage = () => {
    const onAuthenticatingWithGithub = () => {

    }

    return(
        <div className="flex">
            <button onClick={onAuthenticatingWithGithub}>Here</button>
            <a href="https://github.com/login/oauth/authorize?client_id=606f09d9dd417f6bd670">
                SignUpWithGithub
            </a>
        </div>
    )
}

export default HomePage;