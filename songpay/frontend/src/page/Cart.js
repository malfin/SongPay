import {Fragment, useEffect} from "react";
import {useCart} from "react-use-cart";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Cart = () => {
    useEffect(() => {
        document.title = 'Корзина';
    }, [])

    const {isEmpty, totalUniqueItems, items, cartTotal, removeItem, emptyCart} = useCart();

    const RemoveAllCart = () => {
        MySwal.fire({
            title: 'Вы действительно хотите полностью очистить корзину?',
            showDenyButton: true,
            confirmButtonText: 'Да',
            denyButtonText: `Нет`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Отлично!', 'Вы успешно очистили корзину', 'warning');
                emptyCart()
            }
        })
    }

    return (
        <Fragment>
            <h3>Корзина</h3>
            {isEmpty ?
                <h3>Ваша корзина пуста!</h3> :
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name} | {item.original_name ? item.original_name : 'Авторская аранжировка'}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span onClick={() => removeItem(item.id)} className="text-danger">Убрать из
                                        корзины
                                    </span>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <button className="btn-lg btn-danger mb-3" onClick={() => RemoveAllCart()}>Очистить корзину</button>
                    <div className="row">
                        <div className="col">
                            <h3>Всего товара: {totalUniqueItems}</h3>
                        </div>
                        <div className="col">
                            <h3>К оплате: {cartTotal} руб.</h3>
                            <span className="text-primary">Перейдти к оплате</span>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Cart