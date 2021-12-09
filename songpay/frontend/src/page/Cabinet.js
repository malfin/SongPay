import React, {Fragment, useEffect} from "react";
import CardsDownloadsList from "../components/Axios/CardsDownloads";
import MyLoader from "../components/Loader";

const Cabinet = ({card, loading}) => {

    useEffect(() => {
        document.title = 'Личный кабинет'
    }, [])

    return (
        <Fragment>
            <h3>Личный кабинет</h3>
            {!loading &&
                <div className="d-flex justify-content-between flex-wrap">
                    <CardsDownloadsList cards={card}/>
                </div>
            }
            {loading && <MyLoader/>}
        </Fragment>
    )
}

export default Cabinet
