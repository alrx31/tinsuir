import React from "react";

import "./tinder.css";
import TC from "./TC";
export const Tinder = (
    {addEvent,db}
) => {

    return (
        <div className={"tinder"}>
            <div className="cardContainer">
                {db.map((item) => {
                    return (
                        <TC
                            addEvent={addEvent}
                            data={item}
                        />
                    );
                })}
            </div>

        </div>
    );
}