import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from "axios";
import { toast } from "react-toastify";

const ArrangementID = () => {

    const { addItem, inCart } = useCart();
    const [cards, setCards] = useState('');
    const [cover, setCover] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [original_name, setOriginal_name] = useState('');
    const [key, setKey] = useState('');
    const [category, setCategory] = useState('');
    const [audioFile, setAudioFile] = useState('');
    const [text, setText] = useState('');

    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.malfinbeats.ru/api/v1/arrangement/${id}/`)
            .then((result) => {
                setCards(result.data)
                setCover(result.data.cover)
                setName(result.data.name)
                setPrice(result.data.price)
                setOriginal_name(result.data.original_name)
                setKey(result.data.key.key)
                setCategory(result.data.category.name)
                setAudioFile(result.data.audioFile)
                setText(result.data.text)
            })
    }, [id])

    document.title = name


    const AddCart = () => {
        if (inCart(cards.id)) {
            toast.warning('Товар уже в корзине!')
        } else {
            addItem(cards)
            toast.success('Товар успешно добавлен в корзину')

        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={cover} alt={name} className="card-img-top" />
                    <br />
                    <button className="btn btn-primary btn-lg mt-3" onClick={() => AddCart()}>В корзину</button>
                </div>
                <div className="col">
                    <h1>{name}</h1>
                    <h3 className="text-primary">{price} руб.</h3>
                    <h5>{original_name ? original_name : 'Авторская аранжировка'}</h5>
                    <h5>Тональность: {key}</h5>
                    <h5>Категория: {category}</h5>
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
                            src={audioFile}
                            showFilledVolume={true}
                        />
                    </div>
                    <div className="mt-4">
                        <h1>Текст песни</h1>
                        <pre>{text}</pre>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArrangementID;