import React from 'react';
import {NavLink} from "react-router-dom";

export const Profile = () => {
    return (
        <div className={"Profile"}>
            <NavLink to={"/profile"}>Profile</NavLink>
        </div>
    );
}