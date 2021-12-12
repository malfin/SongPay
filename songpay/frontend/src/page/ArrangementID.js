import React from "react";
import {useParams} from "react-router-dom";
import {useCart} from "react-use-cart";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ArrangementID = ({card}) => {

    const {addItem, inCart} = useCart();

    let {id} = useParams();
    let sound = card.filter((item) => item.id === +id)[0];
    document.title = sound.name


    const AddCart = () => {
        if (inCart(sound.id)) {
            MySwal.fire({
                icon: "warning",
                title: '<h3 style="background: none">Товар уже в корзине!</h3>',
                text: 'Товар уже в корзине!',
            })
        } else {
            addItem(sound)
            MySwal.fire({
                icon: "info",
                title: '<h3 style="background: none">Товар успешно добавлен в корзину</h3>',
                text: 'Товар успешно добавлен в корзину',
            })

        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={sound.cover} alt={sound.name} className="card-img-top"/>
                    <br/>
                    <button className="btn btn-primary btn-lg mt-3" onClick={() => AddCart()}>В корзину</button>
                </div>
                <div className="col">
                    <h1>{sound.name}</h1>
                    <h3 className="text-primary">{sound.price} руб.</h3>
                    <h5>{sound.original_name ? sound.original_name : 'Авторская аранжировка'}</h5>
                    <h5>Тональность: {sound.key.key}</h5>
                    <h5>Категория: {sound.category.name}</h5>
                    <div className="mt-4 border-bottom">
                        <h5>Вы получите (архив):</h5>
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item">Аранжировка</li>
                            <li className="list-group-item">Текст</li>
                            <li className="list-group-item">Демо с вокалом</li>
                        </ol>
                    </div>
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

        </div>
    )
}

export default ArrangementID;