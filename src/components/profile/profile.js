import React from "react";
import "./profile.css";

export const Profile = (
    {User}
) => {
    return (
        <div className={"profile"}>
            <div className="photo">
                <img src={User.photo} alt={User.name}/>
            </div>
            <div className="text">
                <h1>{User.name}</h1>
                <h2>{User.email}</h2>
                <h2>{User.phone}</h2>
                <div className="events">
                    {User.events.map((event) => {
                        return (
                            <div className="event">
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                                <p>{event.location}</p>
                                <p>{event.date}</p>
                                <p>{event.awards}</p>
                                <p>{event.category}</p>
                            </div>
                        );
                    })}

                </div>
            <div className="awards">

                <h2>AWARDS</h2>
                <div className="award">
                    <h3>AWARD1</h3>
                    <p>DESCRIPTION1</p>
                </div>
                <div className="award">
                    <h3>AWARD2</h3>
                    <p>DESCRIPTION2</p>
                </div>
                <div className="award">
                    <h3>AWARD3</h3>
                    <p>DESCRIPTION3</p>
                </div>

            </div>
        </div>
    </div>
    );
}