import React from "react";
import { Link } from 'react-router-dom';

const CardsList = ({ cards }) => {
    return (
        <>
            {cards.map((item) =>
                <div className="card" key={item.id}>
                    <Link to={`/arrangement/${item.id}`}
                        className="card-title"><img src={item.cover} className="card-img-top"
                            alt={item.name} /></Link>

                    <div className="card-body">
                        <Link to={`/arrangement/${item.id}`}
                            className="card-title">{item.name} | {item.key.key}</Link>
                        <p className="card-text">{item.price} руб.</p>
                    </div>
                    <div className="card-footer">
                        {item.original_name ? item.original_name : 'Авторская аранжировка'}
                    </div>
                </div>)}
        </>
    )
}

export default CardsList