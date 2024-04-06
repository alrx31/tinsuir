import React, {useState} from "react";
import {ListCard} from "./ListCard";
import "./list.css";
// event = {name,description,location,date,awards,category}
let events = [
        {
            "name": "Event1",
            "description": "Description1",
            "location": "Location1",
            "date": "Date1",
            "awards": "Awards1",
            "category": "Category1"
        },
        {
            "name": "Event2",
            "description": "Description2",
            "location": "Location2",
            "date": "Date2",
            "awards": "Awards2",
            "category": "Category2"
        },
        {
            "name": "Event3",
            "description": "Description3",
            "location": "Location3",
            "date": "Date3",
            "awards": "Awards3",
            "category": "Category3"
        },
        {
            "name": "Event4",
            "description": "Description4",
            "location": "Location4",
            "date": "Date4",
            "awards": "Awards4",
            "category": "Category4"
        },
        {
            "name": "Event5",
            "description": "Description5",
            "location": "Location5",
            "date": "Date5",
            "awards": "Awards5",
            "category": "Category5"
        },
    {
            "name": "Event6",
            "description": "Description6",
            "location": "Location6",
            "date": "Date6",
            "awards": "Awards6",
            "category": "Category6"
        },
        {
            "name": "Event7",
            "description": "Description7",
            "location": "Location7",
            "date": "Date7",
            "awards": "Awards7",
            "category": "Category7"
        },
        {
            "name": "Event8",
            "description": "Description8",
            "location": "Location8",
            "date": "Date8",
            "awards": "Awards8",
            "category": "Category8"
        },
        {
            "name": "Event9",
            "description": "Description9",
            "location": "Location9",
            "date": "Date9",
            "awards": "Awards9",
            "category": "Category9"
        },
        {
            "name": "Event10",
            "description": "Description10",
            "location": "Location10",
            "date": "Date10",
            "awards": "Awards10",
            "category": "Category10"
        },
]
export const List = () => {

    let [isBlock, toggleBlock] = useState(false);

    let toggle = () => {
        toggleBlock(!isBlock);
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
                {events.map((event, key) => {
                    return <ListCard key={key} event={event} isBlock={isBlock} isAwardeed={key%2 == 0}/>
                })}
            </div>
        </div>
    );
}