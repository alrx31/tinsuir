import React, {useState} from "react";
import "./list.css";
export const ListCard = (
    {event,isBlock,  isAwardeed}
    ) => {

    let [isOpen, setIsOpen] = useState(false)
    let toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={["listCard" , isBlock ? "block" : "",isAwardeed? "awarded" : "", isOpen ? "open" : ""].join(' ')} onClick={toggle}>
            <div className="text">
                <h2>{event.name}  </h2>
                <p>{event.description} </p>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <p>{event.awards}</p>
                <p>{event.category}</p>
            </div>
            <div className="photo">
                <img src={`https://picsum.photos/200/300?random=3`} alt="random"/>
            </div>

        </div>
    );
}