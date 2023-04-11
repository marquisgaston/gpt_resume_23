import React from "react";
import profilePic from "../images/profilepic.png";

function Profile() {
    
    return (
        <div className="profile-container">
            <img src={profilePic} alt="Avatar" />
            <div className="profile-text">
                "Pixel-Wrangler and Byte-Tamer: Engineering Digital Frontiers with Precision and Creativity"
            </div>
        </div>
    )
}

export default Profile;