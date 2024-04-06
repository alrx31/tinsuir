import React, {useState} from 'react';
import './header.css';



export const Burger = () => {
    let [open, setOpen] = useState(false);
    let toggle = () => {
        setOpen(!open);
    }

    return (
        <div className={"BurgerMenu"}>
            <div className="burgerWp" onClick={toggle}>
                <span className={["", open ? "active" : ""].join(' ')}></span>
            </div>

            <div className={["window", open ? "active" : ""].join(' ')}>
                adf
            </div>
        </div>
    );
}