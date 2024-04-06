import React, {useState} from "react";
import {ListCard} from "./ListCard";
import "./list.css";
// event = {name,description,location,date,awards,category}

export const List = (
    {events,owner = null, isown = true}
) => {

    let eves = [...events];
    let [isBlock, toggleBlock] = useState(false);

    let filterEvents = (events, user) => {
        let result = [];
        for (let i = 0; i < user.events.length; i++) {
            for (let j = 0; j < events.length; j++) {
                if (user.events[i].name === events[j].name) {
                    result.push(events[j]);
                }
            }
        }
        return result;
    }
    let toggle = () => {
        toggleBlock(!isBlock);
    }
    if (!isown){
        eves = filterEvents(events, owner);
    }

    let CheckAwards = (event) => {

        if( owner == null )return false;
        for (let i = 0; i < owner.events.length; i++) {
            if (owner.events[i].name === event.name) {
                return true;
            }
        }
        return false;
    }

    return (
        <div>

            <div className="Control">
                <div className="Button" >
                     Сортировать
                </div>
                <div className="Button" onClick={toggle}>
                    {isBlock ? "Block" : "List"}
                </div>
            </div>
            <div className="list">
                {eves.map((event, key) => {

                        return (
                            <ListCard
                                key={key}
                                event={event}
                                isBlock={isBlock}
                                isAwardeed={CheckAwards(event)}
                            />
                        );
                })}
            </div>
        </div>
    );
}