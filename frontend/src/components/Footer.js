import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <Link to={"/"} className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg width="30" height="24" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M45.6257 26.8194C31.7764 12.9702 12.4452 -0.301828 5.80925 5.32432C-0.826742 10.9505 12.3729 29.6088 22.5437 40.9572C36.2487 56.2489 60.1962 75.0031 67.5537 67.9342C74.9111 60.8652 59.475 40.6686 45.6257 26.8194Z"
                            stroke="#212529" strokeWidth="8"/>
                        <path
                            d="M46.6515 45.6255C60.5007 31.7763 73.7728 12.4451 68.1466 5.80906C62.5205 -0.826924 43.8622 12.3727 32.5138 22.5435C17.222 36.2485 -1.53213 60.196 5.5368 67.5535C12.6057 74.911 32.8024 59.4748 46.6515 45.6255Z"
                            stroke="#212529" strokeWidth="8"/>
                    </svg>

                </Link>
                <span className="text-muted">© 2021 SongPay</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" href="https://vk.com/malfin_beats" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path className="st0"
                                  d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer