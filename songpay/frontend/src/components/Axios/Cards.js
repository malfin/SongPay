import React from "react";
import {Link} from 'react-router-dom';

const Cards = ({arrangement}) => {
    return (
        <div className="card">
            <img src={arrangement.cover} className="card-img-top" alt={arrangement.name}/>
            <div className="card-body">
                <Link to={`/arrangement/${arrangement.id}`} className="card-title">{arrangement.name} | {arrangement.key.key}</Link>
                <p className="card-text">{arrangement.price} руб.</p>
            </div>
        </div>
    )
}

const CardsList = ({cards}) => {
    return (
        <>
            {cards.map((arrangement) => <Cards key={arrangement.id} arrangement={arrangement}/>)}
        </>
    )
}

export default CardsList