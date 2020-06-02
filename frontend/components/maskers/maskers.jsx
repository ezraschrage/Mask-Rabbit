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

