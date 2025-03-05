import React from 'react'
import RecipeCard from './RecipeCard';
interface Recipe {
    id: number;
    title: string;
    image: string;
}

interface RecipesListProps {
    recipes: Recipe[]
}
const RecipesList = ({ recipes }: RecipesListProps) => {
    return (
        <div className='px-8'>
            {recipes.length ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    )
}

export default RecipesList