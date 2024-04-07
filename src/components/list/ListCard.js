import React, {useEffect, useState} from "react";
import "./list.css";
export const ListCard = (
    {event,isBlock,addEvent,isAwardeed,onAwardeedChange}
    ) => {


    let [isOpen, setIsOpen] = useState(false)
    let toggle = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        // Вызываем функцию обратного вызова, когда isAwardeed изменяется
        onAwardeedChange();
    }, [isAwardeed]);


    return (
        <div className={["listCard" , isBlock ? "block" : "",isAwardeed? "awarded" : "", isOpen ? "open" : ""].join(' ')} onClick={toggle}>
            <div className="text">
                <h2>{event.name}</h2>
                <h2>{event.desc}</h2>

            {!isAwardeed ? <button className="towrite" onClick={()=>{addEvent(event);toggle(isOpen)}}>записаться</button> : null}
            </div>
            <div className="photo">
                <img src={event.img} alt="random"/>
            </div>

        </div>
    );
}