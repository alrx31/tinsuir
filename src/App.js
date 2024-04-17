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
import {Admin} from "./components/Admin/admin";
import {Create} from "./components/Admin/Create";

function App() {
    let [token, setToken] = useState("");
    let [userData,setUserdata] = useState({
        "firstName": "",
        "lastName": "",
        "surName": "",
        "username": "",
        "email": "l@L",
        "password": "123",
        "profilePicture": "",
        "coverPicture": "",
        "events": [],
        "faculty": "",
        "course": "",
        "groupNum":"",
        "isAdmin": "true",
        "_id": "132",

    });

    let [events, setEvents] = useState([
        {
            "name": "FCADHACK",
            "description":"FCADHACK – студенческий хакатон твоего университета! Это хороший шанс показать свои умения в программировании, дизайне и других IT-сферах. На нашем хакатоне",
            "date_start": "05.04.24",
            "date_end": "08.04.24",
            "place": "place1",
            "likes": 0,
            "id": "1",
            "owner": "ФКП",
            "photo": "/images/Intersect.svg"
        },

    ]);
    let [usetEvents, setUsetEvents] = useState([]);


    let history = useNavigate();

    let CallBackLogin = (data,token) => {
        setToken(token)
        setUserdata(data);
        getEvents(token);
        getEventsUser(token);
    }
    useEffect(()=>{
        if (userData.email !== "" && userData.password !== ""){
            history("/my");
        }
        if(userData.email === "" && userData.password === ""){
            history("/");
        }
        if(userData.isAdmin == true){
            history("/adminP");
        }


    }, [userData,token])


    let addEvent = (event) => {
        /* add event to current user*/
        let temp = userData;
        /*check to dublicates*/
        for (let i = 0; i < temp.events.length; i++){
            if (temp.events[i].name ===  event.name){
                return;
            }
        }
        temp.events.push(event);
        setUserdata(temp);
    }
    let isAdmin = (user) => {
        if(user.isAdmin === true){
            return true;
        }
        return false;
    }

    let CallSetuser = (data)=>{
        setUserdata(data);
    }

    let getEvents = async (token)=>{
        console.log(token)
        await fetch(`https://f6a3-2a03-6f01-1-2-00-6ade.ngrok-free.app/api/event/all`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEvents(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    let getEventsUser = async (token)=>{
        console.log(token)
        await fetch(`https://f6a3-2a03-6f01-1-2-00-6ade.ngrok-free.app/api/event/{${userData._id}}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "id": userData._id
            }
        })
            .then(response => response.json())
            .then(data => {
                setEvents(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    let CallAddEvent =  async (event)=>{
        await fetch(`https://f6a3-2a03-6f01-1-2-00-6ade.ngrok-free.app/api/event/${event.id}/like`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify(event.userId),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEvents(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
  return (
    <div className="App">
        <Header />

        <div className="main">
      <Routes>
            <Route path="/list" element={<List events={events} setEvents={setEvents} our={false} owner={userData} token={token} addEvent={addEvent}/>} />
            <Route path="/my" element={<List events={events} our={true} owner={userData} addEvent={addEvent} token={token}/>} />
            <Route path="/profile" element={<Profile User={userData}/>} />
            <Route path="/find" element={<Tinder db={events} addEvent={addEvent}/>} />
            <Route path="/login" element={<Login CallBack={CallSetuser}/>} />
            <Route path="/register" element={<Register />} />
            <Route path={"/"} element={<Login CallBack={CallBackLogin}/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/adminP" element={<Admin />} />
            <Route path="/create" element={<Create CallAddEvent={CallAddEvent} events={events} token={token} user={userData} />}/>
      </Routes>

        </div>
        <Footer isAdmin={isAdmin(userData)}/>
    </div>
  );
}

export default App;
