import './header.scss';
import logo from "../../resources/images/spotify_logo.png"

interface HeaderProps {
    isLoggedIn: boolean
}

export default function Header(props: HeaderProps) {
    return ( 
    <div className='header'>
        <header className="title">Elysian</header>
        {
            !props.isLoggedIn ?
            (        
            <a className="login-spotify" href={"http://localhost:3001/auth/login"}>
                <img className="logo" src={logo} alt="Spotify"/>
            </a>
            ) 
                :
            (
            <a className="login-spotify" href={"http://localhost:3001/auth/logout"}>
                <span>Log Out</span>
            </a>            
            )
        }

    </div>
    );
}