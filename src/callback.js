import {HandleResponse} from "./HandleResponse";

export default function authCallback() {

    let urlParams = new URLSearchParams(window.location.search);
    let authCode = urlParams.get('code');
    const app_id = 504082
    const secret ='226423610f53c494d8221a7001bfe646'
    console.log("code",authCode)

    const tokenURL = "https://connect.deezer.com/oauth/access_token.php"
    // const redirect_uri = "http://localhost:3000/callback"

    let data = {
        "app_id": app_id,
        "secret": secret,
        "code": authCode,
    }
 console.log('data',data)
    let formBody = [];
    for (const property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(tokenURL, {
        mode:"no-cors",
        method: 'POST',
        output: {
            'Content-Type': 'application/json'
        },
        body: formBody
    }).then(HandleResponse).then(response => console.log(response)
    ).then(data => postRequestAccessToken(data) );
    return null
}