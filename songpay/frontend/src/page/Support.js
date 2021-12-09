import React, {Fragment, useState} from "react";
import axios from "axios";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const Support = ({title}) => {
    document.title = title;

    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState('');
    const [send, setSend] = useState(false);
    const [error, setError] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/v1/support/`, {email: email, messages: messages})
            .then(() => {
                setSend(true)
                setEmail('')
                setMessages('')
                if (!send) {
                    MySwal.fire({
                        icon: "info",
                        title: '<h3 style="background: none">Успешно</h3>',
                        text: 'Ваше сообщение отправлено!',
                    })
                }
            })
            .catch(() => {
                setError(true)
                if (!error) {
                    MySwal.fire({
                        icon: "warning",
                        title: '<h3 style="background: none">Ошибка</h3>',
                        text: 'Сервер не доступен!',
                    })
                }

            })
    }

    return (
        <Fragment>
            <h3 className="text-center">Поддержка</h3>
            <div className="row">
                <div className="col m-auto">
                    <p>Если у вас есть вопросы или идеи - заполните эту форму и отправьте!</p>
                    <p>Мы свяжемся с вами в ближайшее время, если это будет необходимо.</p>
                    <p>Спасибо, что выбрали нас!</p>
                </div>
                <div className="col">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" name="email" value={email} placeholder="Email"
                                   onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingTextarea2" className="form-label">Ваше обращение</label>
                            <textarea className="form-control" name="messages" value={messages}
                                      placeholder="Ваше обращение"
                                      id="floatingTextarea2" onChange={(e) => setMessages(e.target.value)} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Отправить</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Support;