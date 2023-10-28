import "./playlist.scss";
import { PlaylistType } from "../../component.types";

interface PlaylistProps {
    playlist: PlaylistType
}

export default function Playlist(props: PlaylistProps) {
    const { playlist } = props;

    return (
        <div className="playlist">
            <img className="playlist-img" src={playlist?.images[0]?.url} alt="playlist"></img>
            <span className="playlist-title">{playlist.name}</span>
        </div>
    )
}