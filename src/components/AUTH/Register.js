import React, {useState} from 'react';

import './log.css';
import {NavLink} from "react-router-dom";

export const Register = () => {

    let [formData, setFormData] = useState({
        "firstName": "any",
        "lastName": "any",
        "surName": "any",
        "username": "any",
        "email": "any",
        "password": "any",
        "profilePicture": "any",
        "coverPicture": "any",
        "events": "any",
        "faculty": "any",
        "course": "any",
        "groupNum": "any"
    })

    let handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        sentData(formData);
    }
    let sentData = async (data) => {
        try {
            const response = await fetch("https://9f53-151-115-79-196.ngrok-free.app/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            } else {
                console.error("Ошибка при отправке данных на сервер");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className={"Form"}>
                <h1>Register</h1><br/>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" onChange={handleChange} name="firstName"/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" onChange={handleChange} name="lastName"/>
                <label htmlFor="surName">Surname</label>
                <input type="text" id="surName" placeholder="Surname" onChange={handleChange} name="surName"/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" onChange={handleChange} name="username"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" onChange={handleChange} name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} name="password"/>
                <label htmlFor="profilePicture">Profile Picture</label>
                <input type="file" id="profilePicture" onChange={handleChange} name="profilePicture"/>
                <label htmlFor="coverPicture">Cover Picture</label>
                <input type="file" id="coverPicture" onChange={handleChange} name="coverPicture"/>
                <label htmlFor="events">Events</label>
                <input type="text" id="events" placeholder="Events" onChange={handleChange} name="events"/>
                <label htmlFor="faculty">Faculty</label>
                <input type="text" id="faculty" placeholder="Faculty" onChange={handleChange} name="faculty"/>
                <label htmlFor="course">Course</label>
                <input type="text" id="course" placeholder="Course" onChange={handleChange} name="course"/>
                <label htmlFor="groupNum">Group Number</label>
                <input type="text" id="groupNum" placeholder="Group Number" onChange={handleChange} name="groupNum"/>
                <button type="submit">Register</button>
                <NavLink to={"/login"} className={"registerBut"}>Login</NavLink>
            </form>
        </div>
    );

}