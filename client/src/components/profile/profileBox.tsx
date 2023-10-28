import "./profileBox.scss";
import {Profile} from "../component.types";

interface ProfileProps {
    profile: Profile
}

export default function ProfileBox(profileProps: ProfileProps) {
    const profile = profileProps.profile;
    return (
    <div className="profile">
        <img className="profile-img" src={profile?.images[1]?.url} alt="profile"></img>
        <ul className="profile-list">
            <li className="profile-list-item-title">{profile?.display_name}</li>
            <li className="profile-list-item">{profile?.followers?.total} Followers </li>
        </ul>
    </div>
    );
}