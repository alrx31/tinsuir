import React from "react";

import "./tinder.css";
import TC from "./TC";
export const Tinder = (
    {addEvent,db}
) => {

    return (

        <div className={"tinder"}>
            <div className="cardContainer">
                <div className="swipe last">

                    <h2>Смахните вправо чтобы записаться</h2>
                    <h2>Смахните влево чтобы пропустить</h2>
                    <h2>Мероприятия закончились<br/> приходите позже</h2>
                    {/*unsmile emoji*/}
                    <div className="image lastimg">
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                        😭
                    </div>

                </div>

                {db.map((item) => {
                    return (
                        <TC
                            addEvent={addEvent}
                            data={item}
                            key={item.id}
                        />
                    );
                })}

            </div>

        </div>
    );
}