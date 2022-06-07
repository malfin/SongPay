import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CardsDownloadsList from "../components/Axios/CardsDownloads";

const Cabinet = ({ token, user }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        document.title = `Личный кабинет`
    }, [])


    useEffect(() => {
        if (user) {
            axios.get(`https://api.malfinbeats.ru/api/v1/order/?user=${user.username}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((result) => {
                    setCards(result.data)
                })
        } else {
            window.location = '/login';
        }
        // eslint-disable-next-line
    }, [])

    return (

        <Fragment>
            {user &&
                <Fragment>
                    <h3>Личный кабинет</h3>
                    <div className="d-flex justify-content-between flex-wrap">
                        <CardsDownloadsList cards={cards} />
                    </div>
                </Fragment>}

        </Fragment>
    )
}

export default Cabinet
