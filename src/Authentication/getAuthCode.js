const authURL = "https://connect.deezer.com/oauth/auth.php"
const redirect_uri = "http://localhost:3000/callback"
const app_id = 504082
const basic_access = "zanele"
const email = "zanelezanzizo@gmail.com"

export function getAuthCode() {
        let authorizationURL = authURL;
        authorizationURL += "?app_id=" + app_id
        authorizationURL += "&redirect_uri=" + redirect_uri;
        authorizationURL += "&perms=" + `${basic_access},${email}`
        window.location.href = authorizationURL;
}

