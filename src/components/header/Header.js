import React from 'react';
import './header.css';
import {Burger} from "./Burger";
import {Profile} from "./Profile";
export const Header = () => {
    return (
        <header>
            <Burger />

            <Profile />
        </header>
    );
}