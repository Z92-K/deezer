import React from "react";

const LButton = ({ title, onClick }) => {
    return (
        <div>
            <button style={styles().loginBtn} onClick={onClick}>
                <div style={styles().loginBtnText}>{title}</div>
            </button>
        </div>
    )
}

const styles = () => ({
    loginBtn: {
        height: 40,
        width:180,
        margin: 15,
        borderRadius: 25,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical: 30,
        elevation: 0,
        backgroundImage: `linear-gradient(to bottom, #FF0000, #FF00D6)`,
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    },
    loginBtnTransparent: {
        height: 40,
        width:180,
        margin: 15,
        borderRadius: 25,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical: 30,
        elevation: 0,
        backgroundImage: `linear-gradient(to bottom, #FF0000, #FF00D6`,
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    },
    loginBtnText: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})

export default LButton