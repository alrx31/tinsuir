import React, { useState} from "react";
import "./list.css";
export const ListCard = (
    {event,isBlock,addEvent,isAwardeed,onAwardeedChange,isAdmin}
    ) => {


    let [isOpen, setIsOpen] = useState(false)
    let toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={["listCard" , isBlock ? "block" : "",isAwardeed? "awarded" : "", isOpen ? "open" : ""].join(' ')}>
            <div className="text" >
                <h2>{event.name}</h2>
                <h2>{event.desc}</h2>
                {!isBlock && !isOpen && <h4>{event.description}</h4>}
                {isOpen && <h3>{event.description}</h3>}
                {
                    isOpen && !isAwardeed && !isAdmin &&
                    <button onClick={()=>{
                        addEvent(event)
                        onAwardeedChange()
                    }

                    } className={"towrite"}
                    >Записаться</button>
                }
            </div>
            <div className="photo" onClick={toggle}>
                <img src={event.photo} alt="random"/>
            </div>

        </div>
    );
}