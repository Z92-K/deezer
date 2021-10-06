import React ,{ Fragment }from 'react'

import { useMediaQuery } from 'react-responsive'
// import { Button } from "reactstrap";
import { getAuthCode } from "./getAuthCode";
import  authCallback  from "./callback"
import Fetch from "./Fetch";
import images from '../src/assets'
import Button from './Components/Button'


const Screen = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })
    return (
        <Fragment>
            <div style={styles().row}>
                {/*<Row style={styles().row}  >*/}
               <div style={styles().InnerCard}>
                   <div>
                       <img src={images.logo2} alt="" style={styles().small}/><h1 style={styles().title}>Welcome to Playa, a version from Deezer </h1>
                   </div>
                   {isDesktopOrLaptop && <div><p style={styles().text}>We've detected that you're viewing from a Desktop or Laptop</p>

                   </div>
                   }
                   {isBigScreen &&<div><p style={styles().text}>We've detected that you're viewing from a Big screen </p><Button type='submit' onClick={getAuthCode} > Click To Login</Button></div> }
                   {isTabletOrMobile && <div><p style={styles().text}>We've detected that you're viewing from a tablet or mobile phone</p><Button type='submit' onClick={getAuthCode} > Click To Login</Button></div>}
                   <p style={styles().text}>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                   {isRetina && <p style={styles().text}>You are retina</p>}
                    <div style={styles().button}>
                        <Button  type='submit' title={'Click To login'} onClick={() => { getAuthCode(); Fetch() } } />
                    </div>
               </div>

            </div>
        </Fragment>

    )
}

const styles = () => ({
    row: {
        display: 'flex',
        backgroundColor: '#A5A5A5',
    },
    small:{
        width: 100,
        height: 100,
        paddingLeft:'10px'
    },
    button:{
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '400px',
    },
    text:{
        fontFamily: 'Opensans',
        fontSize: '18',
        fontWeight: 'Normal',
        paddingLeft:'400px',
        margin: '30px'
    },
    title:{
        paddingLeft:'400px',
        margin: '0px'
    }
})
export default Screen