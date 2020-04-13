import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => (
    <li className="category container">
        <Link to={`/task`}>
            <button className="category item">
            {/* <img src={}/> */}
            <span className="category pic">Here will be an image</span>
            <span className="category name">{props.category.name}</span>
            <span className="category price">Avg. Project: ${props.category.low_avg} - ${props.category.high_avg}</span>
            </button>
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
