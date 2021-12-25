import React from "react";

const CardsDownloads = ({arrangement}) => {

    return (
        <div className="card">
            <img src={arrangement.arrangement.cover} className="card-img-top" alt={arrangement.arrangement.name}/>
            <div className="card-body">
                <h3 className="card-title">{arrangement.arrangement.name} | {arrangement.arrangement.key.key}</h3>
                {/*<p className="card-text">{arrangement.arrangement.price} руб.</p>*/}
            </div>
            <div className="card-footer">
                {arrangement.arrangement.original_name ? arrangement.arrangement.original_name : 'Авторская аранжировка'}
                <a href={arrangement.arrangement.archive} className="btn btn-primary mt-3">Скачать
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