import React, {useState} from "react";

import './admin.css';
import {NavLink, useNavigate} from "react-router-dom";
export const Create = (
    {CallAddEvent, events = [], user, token}
)=>{
    let history = useNavigate();
    let [formData, setFormData] = useState({
        "name": "",
        "desc": "",
        "userId": user._id,
        "img": "",
        "id":""
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
        sentData(formData, token);
        history("/list")
    }

    const sentData = async (data, jwtToken) => {
        console.log(data, jwtToken)
        await fetch("https://f6a3-2a03-6f01-1-2-00-6ade.ngrok-free.app/api/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then( data=> {
                console.log(data)
                CallAddEvent(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    };


    return (
        <div className="register">
            <form onSubmit={handleSubmit} className={"Form"}>
                <h1>Create Event</h1><br/>

                <label htmlFor="eventName">Event Name</label>
                <input type="text" id="eventName" placeholder="Event Name" onChange={handleChange} name="name"/>

                <label htmlFor="eventDescription">Event Description</label>
                <textarea  id="eventDescription" placeholder="Event Description" onChange={handleChange} name="desc"/>

                <label htmlFor="eventDate">Event Date</label>
                <input type="date" id="eventDate" placeholder="Event Date" onChange={handleChange} name="name"/>

                <input type="time"/>
                
                <label htmlFor="eventImage">Event Image</label>
                <input type="file" id="eventImage" placeholder="Event Image" onChange={handleChange} name="img"/>

                <button type="submit">Create Event</button>
            </form>




        </div>
    );
}