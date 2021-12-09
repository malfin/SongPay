import {useState} from "react";

const LoginForm = ({title}) => {
    document.title = title

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsername(e) {
        setUserName(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        console.log('submit: ', e.target)
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
                    <label htmlFor="username" className="form-label">Пароль</label>
                    <input type="text" className="form-control" value={password} id="username"
                           placeholder="Пароль" onChange={handleChangePassword}/>
                </div>
                <button className="btn btn-primary float-end mb-5" type="submit">Войти</button>
            </form>
        </div>
    )
}
export default LoginForm