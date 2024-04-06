import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/footer";
import {List} from "./components/list/List";
import {Profile} from "./components/profile/profile";
import React, {useEffect, useState} from "react";
import {Tinder} from "./components/tinder/Tinder";
import {Login} from "./components/AUTH/Login";
import {Register} from "./components/AUTH/Register";
let users = [
    {
        "name": "User1",
        "email": "Email1",
        "phone": "Phone1",
        "photo": "https://picsum.photos/200/300?random=4",
        "events": [
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
            }
        ],
        "OPT": 3,
        "number of events": 7
    },
    {
        "name": "User2",
        "email": "Email2",
        "phone": "Phone2",
        "photo": "Photo2",
        "events": [
            {
                "name": "Event1",
                "description": "Description1",
                "location": "Location1",
                "date": "Date1",
                "awards": "Awards1",
                "category": "Category1"
            }],
        "OPT": 1,
        "number of events": 1
    },
    {
        "name": "User3",
        "email": "Email3",
        "phone": "Phone3",
        "photo": "Photo3",
        "events": [
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
            }],
        "OPT": 2,
        "number of events": 2
    },
    {
        "name": "User4",
        "email": "Email4",
        "phone": "Phone4",
        "photo": "Photo4",
        "events": [
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
            }],
        "OPT": 3,
        "number of events": 3
    },
]
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
        "category": "Category10",
        "url": "https://picsum.photos/200/300?random=1"
    },
]

function App() {
    let [userData,setUserdata] = useState(users[0]);

    let history = useNavigate();

    let CallBackLogin = (data) => {
        setUserdata(data);
    }
    useEffect(()=>{
        if (userData.email !== "" && userData.password !== ""){
            history("/my");
        }
    }, [userData]);

    let addEvent = (event) => {
        /* add event to current user*/
        let temp = userData;
        temp.events.push(event);
        setUserdata(temp);
    }
  return (
    <div className="App">
        <Header />

        <div className="main">
      <Routes>
            <Route path="/list" element={<List isown={ true} events={events} owner={userData}/>} />
            <Route path="/my" element={<List isown={false} events={events} owner={userData}/>} />
            <Route path="/profile" element={<Profile User={users[0]}/>} />
            <Route path="/find" element={<Tinder db={events} addEvent={addEvent}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={"/"} element={<Login CallBack={CallBackLogin}/>} />
      </Routes>

        </div>
        <Footer />
    </div>
  );
}

export default App;
