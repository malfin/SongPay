import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <Link to={"/"} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45.6257 26.8194C31.7764 12.9702 12.4452 -0.301828 5.80925 5.32432C-0.826742 10.9505 12.3729 29.6088 22.5437 40.9572C36.2487 56.2489 60.1962 75.0031 67.5537 67.9342C74.9111 60.8652 59.475 40.6686 45.6257 26.8194Z"
                        stroke="#212529" strokeWidth="8"/>
                    <path
                        d="M46.6515 45.6255C60.5007 31.7763 73.7728 12.4451 68.1466 5.80906C62.5205 -0.826924 43.8622 12.3727 32.5138 22.5435C17.222 36.2485 -1.53213 60.196 5.5368 67.5535C12.6057 74.911 32.8024 59.4748 46.6515 45.6255Z"
                        stroke="#212529" strokeWidth="8"/>
                </svg>
            </Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className="nav-link px-2 link_gray">Главная</Link></li>
                <li><Link to={"/support"} className="nav-link px-2 link_gray">Поддержка</Link></li>
                <li><Link to={"/catalog"} className="nav-link px-2 link_gray">Каталог</Link></li>
                <li><Link to={"/basket"} className="nav-link px-2 link_gray">Корзина</Link></li>
            </ul>

            <div className="col-md-3 text-end">
                <Link to={"/login"} className="btn btn-outline-primary me-2">Войти</Link>
            </div>
        </header>
    )
}
export default Header