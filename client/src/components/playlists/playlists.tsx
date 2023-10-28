import { useEffect, useState } from "react";
import axios from "axios";
import Playlist from "./playlist/playlist";
import "./playlists.scss";

interface PlaylistsProps {
    isLoggedIn: boolean
}

interface PlaylistsType {
    href: string,
    items: []
}

export default function Playlists(props: PlaylistsProps) {
    const [playlistData, setPlaylistData] = useState<PlaylistsType | null>(null);
    const { isLoggedIn } = props;

    useEffect(() => {
        axios.get('http://localhost:3001/spotify/playlists')
        .then((response) => {
            console.log(response.data);
            setPlaylistData(response.data)
        })
        .catch((error) => {
            console.error(error);
        });
    }, [isLoggedIn]);

    return (
        <div className="playlists-container">
            { playlistData?.items?.map((playlist, index) => {
                return (
                    <Playlist key={index} playlist={playlist}></Playlist>
                );
            })}
        </div>
    )
}