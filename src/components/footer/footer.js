import React from "react";
import "./footer.css";
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="smallBut">
                <NavLink to="/list">Список</NavLink>
            </div>
            <div className="bigButton">
                <NavLink to="/find">Events</NavLink>
            </div>
            <div className="smallBut">
                <NavLink to="/my">Мои</NavLink>
            </div>
        </footer>
    );
}