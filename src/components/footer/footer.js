import React from "react";
import "./footer.css";
import {NavLink} from "react-router-dom";

export const Footer = (
    {isAdmin}
) =>{
    return (
        <footer>
            <div className="smallBut">
                <NavLink to="/list">Список</NavLink>
            </div>
            <div className="bigButton">

                <NavLink to="/find">
                    Events
                </NavLink>


            </div>
            <div className="smallBut">
                {
                    isAdmin ? <NavLink to="/create">создать</NavLink> : <NavLink to="/my">мои</NavLink>
                }
            </div>

        </footer>
    );
}