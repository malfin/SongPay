import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";

const Support = () => {
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState('');
    const [send, setSend] = useState(false);

    useEffect(() => {
        document.title = 'Поддержка';
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/v1/support/`, {email: email, messages: messages})
            .then(res => {
                console.log(res);
                console.log(res.data);
                setSend(true)
                setEmail('')
                setMessages('')
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
                    {send &&
                        <div className="alert alert-success" role="alert">
                            Ваше обращение успешно отправлено!
                        </div>
                    }
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