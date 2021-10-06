async function Fetch() {
    const requestOptions = {
        method: "GET",
        mode:"no-cors",
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Headers': 'https://api.deezer.com/',
            // 'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow'
    };
    await fetch("https://api.deezer.com/search/artist?q=shakira", requestOptions)
        .then(response => {
            if(response.ok){
               return response.json()
            }
            throw response;
        })
        .then(data)
    try{
        let response = await fetch("https://api.deezer.com/search/artist?q=shakira", requestOptions)
        console.log(response.json())
        return response
    }
    catch(err){
        console.log('Response Error ', err)
    }
}
export default Fetch