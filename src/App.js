import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntentionForm from "./components/IntentionForm";
import PrayerList from "./components/PrayerList";
import Navigation from "./components/Navigation";
import PopPrayer from "./components/PopPrayers";
import Admin from "./database/Admin";
import {getToken, onMessageListener} from "./database/firebase";
import {ReactNotificationComponent} from "./components/ReactNotificationComponent";
import {Notifications} from "./components/Notification";

function App() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title:"",body:""});

    useEffect(() => {
        if (window.swUpdateReady) {
            window.swUpdateReady = false;
            window.stop();
            window.location.reload();
        }
    });

    onMessageListener()
        .then((payload) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));

    return (
        <div>
            <ReactNotificationComponent
                title={notification.title}
                body={notification.body}
                show={show}
            />
            <Notifications/>

            <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/"><IntentionForm/></Route>
                        <Route path="/intentions"><PrayerList/></Route>
                        <Route path="/popular-prayers"><PopPrayer/></Route>
                        <Route path="/admin"><Admin/></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;