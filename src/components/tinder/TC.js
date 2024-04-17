import React from "react";

import "./tinder.css";
import TinderCard from "react-tinder-card";


let TC = (
    {
        data,addEvent,key
    }
) => {

    let onSwipe = (direction) => {
        if(direction === "right") {
            /*
            * subscrise to the event
            *
            * */
            console.log("You liked this card");
            addEvent(data);
        }else{
            console.log("You disliked this card");

        }
    }
    return(
        <TinderCard
            onSwipe={onSwipe}
            className={"swipe"}
            preventSwipe={["up", "down"]}
        >
            <div className="image">
                <img src={data.photo} alt=""/>
            </div>
            <h1>{data.name}</h1>
            <div className="text">
                <h5>Организатор: {data.owner}</h5>
                <h5>Когда: {data.date_start} - {data.date_end}</h5>
                <h5>Где: {data.place}</h5>
                <h5>Описание:<br/><p>{data.description}</p></h5>

            </div>
        </TinderCard>
    )
}

export default TC;