import React from "react";
import "./list.css";
export const ListCard = (
    {event,isBlock, key,  isAwardeed}
    ) => {
    return (
        <div className={["listCard" , isBlock ? "block" : "",isAwardeed? "awarded" : ""].join(' ')}>
            <div className="text">
                <h2>{event.name}  </h2>
                <p>{event.description} sdffffffffffffffsdlfkamsoifhmcawpioesgbsiueocmj!</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <p>{event.awards}</p>
                <p>{event.category}</p>
            </div>
            <div className="photo">
                <img src={`https://picsum.photos/200/300?random=${key}`} alt="random"/>
            </div>

        </div>
    );
}