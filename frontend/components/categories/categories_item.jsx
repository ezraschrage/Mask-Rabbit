import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => (
    <div className="category item">
        <Link to={`/task`}>
            <button>
            {/* <img src={}/> */}
            <span>Here will be an image</span>
            <span>{props.category.name}</span>
            <span>Avg. Project: ${props.category.low_avg} - ${props.category.high_avg}</span>
            </button>
        </Link>
    </div>
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
