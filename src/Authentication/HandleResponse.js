export function HandleResponse(response) {
    let error = localStorage.getItem('error')
    if(error){
        window.location.reload(true);
    }
    if (response.status !== 200 ) {
        if ([401, 403].indexOf(response.status) !== -1) {
            console.log(response.message)
            window.location.reload(true);
        }

        const error ="Error"
        return Promise.reject(error);
    }
    else{
        return response
    }

}