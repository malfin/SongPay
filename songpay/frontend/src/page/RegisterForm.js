import {useState} from "react";
import axios from "axios";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const RegisterForm = ({title}) => {

    document.title = title


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangeFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeLastName(e) {
        setLastName(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/register/', {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email
        }).then(function (res) {
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            window.location = "/"
        }).catch(function (err) {
            MySwal.fire({
                title: '<h3 style="background: none">Ошибка</h3>',
                text: err.response.data.username[0],
            })
        })
    }

    return (
        <div className="container">
            <h3 className="text-center">Регистрация</h3>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} id="email"
                           placeholder="Почта" onChange={handleChangeEmail} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Имя пользователя</label>
                    <input type="text" className="form-control" value={username} id="username"
                           placeholder="Имя пользователя" onChange={handleChangeUsername} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">Имя</label>
                    <input type="text" className="form-control" value={first_name} id="first_name"
                           placeholder="Имя" onChange={handleChangeFirstName} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Фамилия</label>
                    <input type="text" className="form-control" value={last_name} id="last_name"
                           placeholder="Фамилия" onChange={handleChangeLastName} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" value={password} id="password"
                           placeholder="Пароль" onChange={handleChangePassword} required/>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary" type="submit">Регистрация</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm