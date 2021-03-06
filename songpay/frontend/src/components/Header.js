import {Link} from 'react-router-dom';
import {Fragment} from "react";

const Header = ({user}) => {
    const logout = () => {
        localStorage.setItem('token', null);
        localStorage.setItem('refreshToken', null);
        localStorage.setItem('user', null);
        window.location = '/'
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <svg width="30" height="24" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="d-inline-block align-text-top">
                        <path
                            d="M45.6257 26.8194C31.7764 12.9702 12.4452 -0.301828 5.80925 5.32432C-0.826742 10.9505 12.3729 29.6088 22.5437 40.9572C36.2487 56.2489 60.1962 75.0031 67.5537 67.9342C74.9111 60.8652 59.475 40.6686 45.6257 26.8194Z"
                            stroke="#212529" strokeWidth="8"/>
                        <path
                            d="M46.6515 45.6255C60.5007 31.7763 73.7728 12.4451 68.1466 5.80906C62.5205 -0.826924 43.8622 12.3727 32.5138 22.5435C17.222 36.2485 -1.53213 60.196 5.5368 67.5535C12.6057 74.911 32.8024 59.4748 46.6515 45.6255Z"
                            stroke="#212529" strokeWidth="8"/>
                    </svg>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/support"} className="nav-link px-2 link_gray">Поддержка</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/terms"} className="nav-link px-2 link_gray">Правила</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cart"} className="nav-link px-2 link_gray">Корзина</Link>
                        </li>

                        {!user &&
                        <Fragment>
                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link px-2 link_gray">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link px-2 link_gray">Авторизация</Link>
                            </li>
                        </Fragment>
                        }
                        {user &&
                        <Fragment>
                            <li className="nav-item">
                                <Link to={"/lk"} className="nav-link px-2 link_gray">Личный кабинет</Link>
                            </li>
                            <li className="nav-item"><Link to={"#"}
                                                           className="nav-link px-2 link_gray" onClick={logout}>Выйти
                                | {user && user.username}</Link></li>
                        </Fragment>

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header