import React from 'react';
import CategoryItem from './categories_item';

class Categories extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render () {
        const { categories } = this.props;
        return (
            <div className="category-container">
                <ul className="categories">
                    
                    {categories.map(category => (
                        <CategoryItem category={category} key={category.id}/>
                    ))}
                </ul>
            </div>
        )
    }

};

export default Categories;

{/* <ul>
    {numbers.map((number) =>
        <ListItem key={number.toString()}
            value={number} />
    )}
</ul> */}


//     const { pokemon, loading } = this.props;

//     if (loading) { return <LoadingIcon />; }

//     return (
//         <section className="pokedex">
//             <Route exact path="/" component={PokemonFormContainer} />
//             <Route
//                 path="/pokemon/:pokemonId"
//                 component={PokemonDetailContainer}
//             />
//             <ul>
//                 {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
//             </ul>
//         </section>
//     );
// }
