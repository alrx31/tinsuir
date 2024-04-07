import React, { useState } from 'react';
import './log.css';
import { NavLink } from "react-router-dom";

export const Login = (
    { CallBack }
) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sentData(formData);
    };

    const sentData = async (data) => {
        await fetch("https://f6a3-2a03-6f01-1-2-00-6ade.ngrok-free.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response =>
        response.json()
            )
            .then(data => {
                CallBack(data.user, data.token);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    };

    return (
        <div className="login">
            <form className="Form" onSubmit={handleSubmit}>
                <label htmlFor="email">Login</label>
                <input type="text" id="login" placeholder="email" onChange={handleChange} name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} name="password" />
                <button type="submit">Login</button>
                <NavLink to={"/register"} className="registerBut">Register</NavLink>
            </form>
        </div>
    );
};
