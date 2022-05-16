import React from "react";
import {Link} from 'react-router-dom';

const CategoryAxios = ({category}) => {
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/catalog/${category.id}`} className="card-title">{category.name}</Link>
            </div>
        </div>
    )
}

const CategoryList = ({categories}) => {
    return (
        <>
            {categories.map((category) => <CategoryAxios key={category.id} category={category}/>)}
        </>
    )
}

export default CategoryList