import { fetchRecipeDetails } from "@/lib/actions/recipe.actions";
import Image from "next/image";

export default async function Recipe({ params }: { params: { id: string } }) {
    const { id } = await params;
    const recipe = await fetchRecipeDetails(id);

    return (
        <div>
            <div className="flex justify-between gap-x-12">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full max-w-2xl  rounded-xl shadow-lg mb-6"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
                    <div className="text-center mb-8">
                        <p className="text-lg font-medium"><strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes</p>
                        <p className="text-lg font-medium"><strong>Servings:</strong> {recipe.servings}</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Ingredients</h2>
                <ul className="list-disc list-inside space-y-2 grid grid-cols-1 md:grid-cols-2">
                    {recipe.extendedIngredients.map((ingredient: { id: string; original: string }) => (
                        <li key={ingredient.id} className="text-lg">{ingredient.original}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-24">
                <h2 className="text-3xl font-semibold mb-4">Summary</h2>
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            </div>

        </div >
    );
}
