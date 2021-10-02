import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntentionForm from "./components/IntentionForm";
import Appreciation from "./components/Appreciation";
import PrayerList from "./components/PrayerList";
import Navigation from "./components/Navigation";
import PopPrayer from "./components/PopPrayers";

function App() {
    return (
        <Router>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path="/"><IntentionForm/></Route>
                    <Route path="/appreciation"><Appreciation/></Route>
                    <Route path="/intentions"><PrayerList/></Route>
                    <Route path="/popular-prayers"><PopPrayer/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;