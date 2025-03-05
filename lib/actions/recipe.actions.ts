'use server';

const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

const fetchData = async (url: string, options = {}) => {
    try {
        const res = await fetch(url, options);
        if (!API_KEY) {
            throw new Error(`Not authorized`);
        }
        if (!res.ok) {
            throw new Error(`Fetch error: ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};

export const fetchRecipes = async (
    query: string,
    cuisine: string,
    maxReadyTime?: number,
    offset: number = 0
): Promise<any[]> => {
    const url = `${BASE_URL}/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&apiKey=${API_KEY}&offset=${offset}`;
    const data = await fetchData(url, { next: { revalidate: 60 } });
    return data?.results || [];
};

export const fetchRecipeDetails = async (id: string): Promise<any | null> => {
    const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`;
    return fetchData(url, { cache: "no-store" });
};
