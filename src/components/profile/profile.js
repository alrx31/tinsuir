import React from "react";
import "./profile.css";

export const Profile = (
    {User}
) => {
    return (
        <div className={"profile"}>
            <div className="photo">
                <img src={User.profilePicture} alt={User.firstName}/>
            </div>
            <div className="text">
                <h2>{User.firstName} {User.lastName} {User.surName}</h2>
                {User.isAdmin ? <h3>Admin</h3> : null}
                <h3>{User.events.length} events</h3>
                <p>{User.username}</p>
                <p>{User.email}</p>
                <p>{User.faculty}</p>
                <p>{User.course}</p>
                <p>{User.groupNum}</p>



            </div>
    </div>
    );
}