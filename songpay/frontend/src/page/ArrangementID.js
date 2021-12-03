import React, {Fragment} from "react";
import {useParams} from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const ArrangementID = ({card}) => {

    let {id} = useParams();
    let sound = card.filter((item) => item.id === +id)[0];

    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <img src={sound.cover} alt={sound.name} className="card-img-top"/>
                    <br/>
                    <button className="btn btn-primary btn-lg mt-3">В корзину</button>
                </div>
                <div className="col">
                    <h1>{sound.name}</h1>
                    <h3 className="text-primary">{sound.price} руб.</h3>
                    <h5>{sound.original_name ? `${sound.original_name}` : 'Авторская аранжировка'}</h5>
                    <h5>Тональность: {sound.key.key}</h5>
                    <h5>Категория: {sound.category.name}</h5>
                    <div className="mt-4">
                        <h5>Демо запись:</h5>
                        <AudioPlayer
                            src={sound.audioFile}
                            showFilledVolume={true}
                        />
                    </div>
                    <div className="mt-4">
                        <h1>Текст песни</h1>

                        <pre>{sound.text}</pre>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ArrangementID;