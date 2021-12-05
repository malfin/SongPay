import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import './static/css/main.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Support from "./page/Support";
import Error404 from "./page/Error404";
import Category from "./page/Category";
import ArrangementID from "./page/ArrangementID";
import Basket from "./page/Basket";


function App() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/arrangement/')
            .then((result) => {
                setCards(result.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <Router>

                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Content card={cards} loading={loading}/>
                    </Route>
                    <Route exact path="/support">
                        <Support/>
                    </Route>
                    <Route exact path="/catalog">
                        <Category/>
                    </Route>
                    <Route exact path="/basket">
                        <Basket/>
                    </Route>
                    <Route exact path="/arrangement/:id">
                        <ArrangementID card={cards}/>
                    </Route>
                    <Route exact path="*">
                        <Error404/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
