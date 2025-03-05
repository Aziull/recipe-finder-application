import RecipesList from "@/components/RecipesList";
import { fetchRecipes } from "@/lib/actions/recipe.actions";


interface RecipesPageProps {
    searchParams: {
        searchQuery?: string;
        cuisine?: string;
        maxReadyTime?: string;
    };
}


export default async function Recipes({ searchParams }: RecipesPageProps) {
    const { searchQuery = '', cuisine = '', maxReadyTime } = await searchParams;

    const recipes = await fetchRecipes(searchQuery, cuisine, maxReadyTime)
    return (<div>
        <RecipesList recipes={recipes} />
    </div>
    );
};