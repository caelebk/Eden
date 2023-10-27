import React from 'react';
import './header.css';
import logo from "../../resources/images/spotify_logo.png"

export default function Header() {
    return ( 
    <div className='header'>
        <div className="title">Elysian</div>
        <a className="login-spotify" href="https://localhost:3001/login">
            <img className="logo" src={logo} alt="Spotify"/>
        </a>
    </div>
    );
}