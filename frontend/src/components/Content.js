import React, {useState} from "react";
import CardsList from "./Axios/Cards";
import MyLoader from "./Loader";


function Content({card, loading, title}) {
    const [search, setSearch] = useState('');
    document.title = title;

    const filterSearch = card.filter(items => {
        return items.original_name.toLocaleLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="container">
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

        </div>
    )
}

export default Content;