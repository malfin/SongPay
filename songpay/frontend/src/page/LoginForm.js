import {useState} from "react";
import axios from "axios";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

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
        // e.preventDefault();
        // console.log('username: ', username)
        // console.log('password: ', password)
        axios.post('http://localhost:8000/api/v1/token/', {
            username: username,
            password: password,
        }).then(function (res) {
            // console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            // MySwal.fire({
            //     title: '<h3 style="background: none">Успешно</h3>',
            //     text: 'Вы успешно авторизовались!',
            // })
            window.location = "/"
        }).catch(function () {
            MySwal.fire({
                title: '<h3 style="background: none">Ошибка</h3>',
                text: 'Проверьте правильность введённых данных!',
            })
        })
        e.preventDefault();
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