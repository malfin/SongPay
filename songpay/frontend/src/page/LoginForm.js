import {useState} from "react";
import axios from "axios";

import {toast} from "react-toastify";


const LoginForm = ({title}) => {
    document.title = title


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/token/', {
            username: username,
            password: password,
        }).then(function (res) {
            // console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            window.location = '/'
            toast.success("Вы успешно авторизовались!")
        }).catch(function () {
            toast.error('Не верный логин или пароль!')
        })

    }

    return (
        <div className="container">
            <h3 className="text-center">Авторизация</h3>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Имя пользователя</label>
                    <input type="text" className="form-control" value={username} id="username"
                           placeholder="Имя пользователя" onChange={handleChangeUsername}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" value={password} id="password"
                           placeholder="Пароль" onChange={handleChangePassword}/>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary" type="submit">Войти</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm