import Playa from "./Playa"
export function postRequestAccessToken(data) {
    let accessToken = data["access_token"]
    console.log('Token', accessToken)
    let playa = Playa(accessToken);
}