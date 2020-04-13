import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => (
    <li className="category-li">
        <Link to={`/task`}>
            <div className="category btn">
            {/* <img src={}/> */}
            <span className="category pic"></span>
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

// const CategoryItem = ({ category }) => {
//     <div className="category item">
//         <Link to={`/task`}>
//             <button>
//                 {/* <img src={}/> */}
//                 <span>Here will be an image</span>
//                 <span>{category.name}</span>
//                 <span>Avg. Project: ${category.low_avg} - ${category.high_avg}</span>
//             </button>
//         </Link>
//     </div>
// }

// export default CategoryItem;
