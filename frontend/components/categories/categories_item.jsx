import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => (
    <li className="category-li">
        <Link to={`/task`}>
            <div className="category btn">
            {/* <img className="category pic" src={props.category.photoUrl} /> */}
            <span className="category name">{props.category.name}</span>
            <span className="category price">
                <div className="tag"></div>
                Avg. Project: ${props.category.low_avg} - ${props.category.high_avg}
            </span>
            </div>
        </Link>
    </li>
)

export default CategoryItem;