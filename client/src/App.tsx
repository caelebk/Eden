import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.scss';
import Header from './components/header/header';
import ProfileBox from './components/profile/profileBox';
import Playlists from './components/playlists/playlists';
import { Profile } from "./components/component.types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const status = queryParams.get('success') === "true";
      setIsLoggedIn(status);

      if (isLoggedIn && !profile) {
        axios.get('http://localhost:3001/spotify/profile')
          .then((response) => {
            setProfile(response.data as Profile);
          })
          .catch((error) => {
            console.error(error);
          });
      }
  }, [isLoggedIn, profile]);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn}></Header>
      {
        profile &&
        (
        <>
        <ProfileBox profile={profile}></ProfileBox>
        <Playlists isLoggedIn={isLoggedIn}></Playlists>
        </>
        )
      }
    </div>
  );
}

export default App;
