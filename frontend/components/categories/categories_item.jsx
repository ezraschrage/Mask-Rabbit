import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    <div className="category item">
        <Link to={`/task`}>
            <button>
            <img src={}/>
            <span>Here will be an image</span>
            <span>{category.name}</span>
            <span>Avg. Project: ${category.low_avg} - ${category.high_avg}</span>
            </button>
        </Link>
    </div>
}

export default CategoryItem;


// class CategoryItem extends React.Component {



//     render() {
//         return (
//             <div className="category item">
//                 <Link to={`/task`}>

//                 </Link>
//             </div>
//         )
//     }
// }

import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
    <li className="pokemon-index-item">
        <Link to={`/pokemon/${pokemon.id}`}>
            <span>{pokemon.id}</span>
            <img src={pokemon.image_url} alt={pokemon.name} />
            <span>{pokemon.name}</span>
        </Link>
    </li>
);

export default PokemonIndexItem;
