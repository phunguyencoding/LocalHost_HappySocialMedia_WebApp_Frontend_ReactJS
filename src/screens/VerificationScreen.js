import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function VerificationScreen() {
    const verificationToken = localStorage.getItem('userInfo').slice(58).slice(0, -1);
    
    const [clicked, setClicked] = useState('');
    const clickedHandler = () => {
        setClicked(true);
    }
    return (
        <div>
            <h1>Please click to the link below to verify your account:</h1>
            <a target="_blank" onClick={clickedHandler} rel="noreferrer"
            href={`http://localhost:8080/api/auth/verification/${verificationToken}`}>
                http://localhost:8080/api/auth/verification/{verificationToken}</a>
                <br></br>
                <br></br>
        {clicked ? 
        (<Redirect to='/login'/>) 
        : (<h1>Please verify your account first!</h1>)}
        </div>
    )
}
