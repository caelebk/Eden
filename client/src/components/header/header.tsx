import React, { useEffect, useState } from 'react';
import './header.css';
import logo from "../../resources/images/spotify_logo.png"

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const status = queryParams.get('success') === "true";
        setIsLoggedIn(status);
    });
    return ( 
    <div className='header'>
        <div className="title">Elysian</div>
        {
            !isLoggedIn ?
            (        
            <a className="login-spotify" href={"http://localhost:3001/login"}>
                <img className="logo" src={logo} alt="Spotify"/>
            </a>
            ) 
                :
            (
                <div>Authenticated</div>
            )
        }

    </div>
    );
}