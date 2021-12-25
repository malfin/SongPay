import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CartProvider} from "react-use-cart";

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

import Cart from "./page/Cart";
import Cabinet from "./page/Cabinet";
import LoginForm from "./page/LoginForm";
import Terms from "./page/Terms";
import RegisterForm from "./page/RegisterForm";


function App() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    let user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/arrangement/`)
            .then((result) => {
                setCards(result.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <Router>
                <CartProvider>
                    <Header user={user}/>
                    <Switch>
                        <Route exact path="/">
                            <Content card={cards}
                                     loading={loading}
                                     title="Главная | SongPay"
                            />
                        </Route>
                        <Route exact path="/support">
                            <Support title="Поддержка | SongPay"/>
                        </Route>
                        <Route exact path="/catalog">
                            <Category title="Каталог | SongPay"/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart title="Корзина | SongPay"/>
                        </Route>
                        <Route exact path="/arrangement/:id">
                            <ArrangementID card={cards}/>
                        </Route>
                        <Route exact path="/lk">
                            <Cabinet card={cards} loading={loading} user={user} token={localStorage.getItem("token")}/>
                        </Route>
                        <Route exact path="/terms">
                            <Terms title="Правила | SongPay"/>
                        </Route>
                        <Route exact path="/login">
                            <LoginForm title="Авторизация | SongPay"/>
                        </Route>
                        <Route exact path="/register">
                            <RegisterForm title="Регистрация | SongPay"/>
                        </Route>
                        <Route>
                            <Error404 title="Ошибка 404 | SongPay"/>
                        </Route>
                    </Switch>
                    <Footer/>
                </CartProvider>
            </Router>
        </div>
    );
}

export default App;
