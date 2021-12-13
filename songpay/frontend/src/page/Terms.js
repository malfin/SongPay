import {Link} from "react-router-dom";

const Terms = ({title}) => {
    document.title = title

    return (
        <div className="container">
            <h3>Правила</h3>
            <h5>Используя этот сайт, вы соглашаетесь со следующими условиями:</h5>
            <ol className="list-group list-group-numbered container">
                <li className="list-group-item">
                    Мы можем вносить изменения в SongPay или ограничивать доступ для всех или отдельных
                    пользователей без уведомления и ответственности.
                    <p>Основная причина может быть в технических работах.</p>
                </li>
                <li className="list-group-item">
                    Все продукты, заказанные через SongPay, будут доставлены сразу после покупки в личном
                    кабинете.
                    <p className="text-danger">Все продажи окончательны, возврат/обмен не принимаются!</p>
                </li>
                <li className="list-group-item">
                    Если у вас есть проблемы или идеи, отправьте сообщение по адресу <a
                    href="mailto:malfin@internet.ru" className="text-dark">malfin@internet.ru</a>.
                    <p>
                        Или воспользуйтесь специальной формой на странице <Link to={"/support"}
                                                                                className="text-dark">Поддержка</Link>.
                        Мы ответим вам в течении 48 часов.
                    </p>

                </li>
            </ol>
        </div>
    )
}
export default Terms