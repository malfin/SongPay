import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import CardsList from "./Axios/Cards";
import MyLoader from "./Loader";

function Content() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Главная';
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/arrangement/')
            .then((result) => {
                setCards(result.data)
                setLoading(false);
            })
    }, [])

    return (
        <Fragment>
            <h3>Все аранжировки</h3>
            {!loading &&
            <div className="d-flex justify-content-between flex-wrap">
                <CardsList cards={cards}/>
            </div>
            }
            {loading && <MyLoader/>}

        </Fragment>
    )
}

export default Content;