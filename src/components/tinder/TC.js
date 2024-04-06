import React from "react";

import "./tinder.css";
import TinderCard from "react-tinder-card";


let TC = (
    {
        data,addEvent
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
                <img src={data.url} alt=""/>
            </div>
            <div className="text">
                <h3>{data.name}</h3>
                {/*<h3>{data.description}</h3>*/}
            </div>
        </TinderCard>
    )
}

export default TC;