import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import CategoryList from "../components/Axios/CategoryAxios";
import MyLoader from "../components/Loader";


function Category({title}) {
    document.title = title

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => (
        axios.get('http://127.0.0.1:8000/api/v1/category/')
            .then((result) => {
                setCategory(result.data);
                setLoading(false)
            })
    ), [])


    return (
        <Fragment>
            <h3>Все категории</h3>

            {!loading &&
                <div className="d-flex justify-content-start flex-wrap">
                    <CategoryList categories={category}/>
                </div>
            }
            {loading && <MyLoader/>}
        </Fragment>
    )

}

export default Category;