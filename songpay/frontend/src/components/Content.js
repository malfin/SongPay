import React, {Fragment, useEffect, useState} from "react";
import CardsList from "./Axios/Cards";
import MyLoader from "./Loader";

function Content({card, loading}) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        document.title = 'Главная';
    })

    const filterSearch = card.filter(items => {
        return items.original_name.toLocaleLowerCase().includes(search.toLowerCase())
    })

    return (
        <Fragment>
            <h3>Все аранжировки</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Поиск</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Введите название песни/исполнителя"
                           onChange={(event => setSearch(event.target.value))}/>
                </div>
            </form>
            {!loading &&
                <div className="d-flex justify-content-between flex-wrap">
                    <CardsList cards={filterSearch}/>
                </div>
            }
            {loading && <MyLoader/>}

        </Fragment>
    )
}

export default Content;