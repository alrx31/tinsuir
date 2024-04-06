import React, { useState } from 'react';
import './log.css';
import { NavLink } from "react-router-dom";

export const Login = ({ CallBack }) => {
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
        try {
            const response = await fetch("https://9f53-151-115-79-196.ngrok-free.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                // Call the callback function with response data
                CallBack(responseData);
            } else {
                console.error("Ошибка при отправке данных на сервер");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login">
            <form className="Form" onSubmit={handleSubmit}>
                <label htmlFor="login">Login</label>
                <input type="text" id="login" placeholder="email" onChange={handleChange} name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} name="password" />
                <button type="submit">Login</button>
                <NavLink to={"/register"} className="registerBut">Register</NavLink>
            </form>
        </div>
    );
};
