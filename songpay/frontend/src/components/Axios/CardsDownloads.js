import React from "react";
import {Link} from 'react-router-dom';

const CardsDownloads = ({arrangement}) => {

    return (
        <div className="card">
            <img src={arrangement.cover} className="card-img-top" alt={arrangement.name}/>
            <div className="card-body">
                <Link to={`/arrangement/${arrangement.id}`}
                      className="card-title">{arrangement.name} | {arrangement.key.key}</Link>
                <p className="card-text">{arrangement.price} руб.</p>
            </div>
            <div className="card-footer">
                {arrangement.original_name ? arrangement.original_name : 'Авторская аранжировка'}
                <a href={arrangement.archive} className="btn btn-primary mt-3">Скачать
                    архив</a>
            </div>
        </div>
    )
}

const CardsDownloadsList = ({cards}) => {
    return (
        <>
            {cards.map((arrangement) => <CardsDownloads key={arrangement.id} arrangement={arrangement}/>)}
        </>
    )
}

export default CardsDownloadsList