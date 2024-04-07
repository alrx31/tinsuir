import React, { useState } from "react";
import { ListCard } from "./ListCard";
import "./list.css";

export const List = ({ events = [], our, owner, addEvent ,setEvents,token}) => {
    let [key, setKey] = useState(0);
    let eves = [];
    if (our) {
        eves = owner.events;
    }else{
        eves = [...events]
    }

    let CheckAward = (event) => {
        for(let i = 0 ; i < owner.events.length; i++){
            if (owner.events[i].name === event.name){
                return true;
            }
        }
        return false;
    };

    let [isBlock, toggleBlock] = useState(false);

    let toggle = () => {
        toggleBlock(!isBlock);
    };

    // Функция обратного вызова, которая будет вызываться при изменении isAwardeed
    const handleAwardeedChange = () => {
        // Вызываем функцию toggleBlock для перерисовки компонента List
        setKey(key=>key+ 1)
    };



    return (
        <div>
            <div className="Control">
                <div className="Button">Сортировать</div>
                <div className="Button" onClick={toggle}>
                    {isBlock ? "Block" : "List"}
                </div>
            </div>
            <div className="list" key={key}>
                {eves?.map((event, key) => {
                    return (
                        <ListCard
                            key={key}
                            event={event}
                            isBlock={isBlock}
                            addEvent={addEvent}
                            isAwardeed={CheckAward(event)}
                            onAwardeedChange={handleAwardeedChange} // Передаем функцию обратного вызова
                        />
                    );
                })}
            </div>
        </div>
    );
};
