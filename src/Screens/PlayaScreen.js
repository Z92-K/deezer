import React, {useEffect, useState} from "react";

import {
    Card,
    ListGroup,
    ListGroupItem,
    Row,

} from 'reactstrap';


import  Fetch  from '../Fetch'

const PlayaScreen = ( props) => {

    const [ data, setData] = useState(null)
    const [ load, setLoad] = useState(true)
    const [ error, setError] = useState(null)

    useEffect( ()=> {
        const requestOptions = {
            method: "GET",
            mode:"no-cors",
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Headers': 'https://api.deezer.com/',
                'Access-Control-Allow-Origin': '*'
            },
            redirect: 'follow'
        };
        fetch("https://api.deezer.com/search/artist?q=shakira", requestOptions)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw response;
        })
            .then(data =>{
                setData(data)
            }).catch( error => {
                console.error('Loading Error ', error)
                setError(error)
            })
            .finally(()=>{
                setLoad(false)
            })
    },[])
    console.log('data',data)
    return (
        <div>
            <Card>
                {data ?
                    <div>
                        {data.map((artist,idx) =>
                            <>
                                <div>
                                    <ListGroup>
                                        <ListGroupItem key={idx} color="success" tag="a" href="#" action>
                                            {artist.name}
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </> )} </div> : "No playa yet..." }
            </Card>
        </div>
    )
}

export default PlayaScreen