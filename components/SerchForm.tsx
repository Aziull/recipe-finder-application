'use client'
import Form from 'next/form';
import { useState } from 'react';
const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [maxReadyTime, setMaxReadyTime] = useState<number | string>('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        validateForm(e.target.value, cuisine, maxReadyTime);
    };

    const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCuisine(e.target.value);
        validateForm(query, e.target.value, maxReadyTime);
    };

    const handlePrepTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxReadyTime(e.target.value.toString());
        validateForm(query, cuisine, e.target.value);
    };

    const validateForm = (query: string, cuisine: string, maxReadyTime: string | number) => {
        if (query || cuisine || maxReadyTime) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <Form action={'/recipes'} className='flex flex-col gap-4'>
            <div>
                <label htmlFor="query" className="block text-sm font-medium">Recipe Query</label>
                <input
                    id="query"
                    name='query'
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="e.g., pasta"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                />
            </div>

            <div>
                <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine</label>
                <select
                    name='cuisine'
                    id="cuisine"
                    value={cuisine}
                    onChange={handleCuisineChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                >
                    <option value="">Select Cuisine</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>

            <div>
                <label htmlFor="maxReadyTime" className="block text-sm font-medium">Max Preparation Time (min)</label>
                <input
                    name='maxReadyTime'
                    id="maxReadyTime"
                    type="number"
                    value={maxReadyTime}
                    onChange={handlePrepTimeChange}
                    placeholder="e.g., 30"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                />
            </div>

            <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 mt-4 ${isFormValid ? 'bg-white text-black' : 'bg-gray-300 text-white'}  font-semibold rounded-md disabled:opacity-50`}
            >
                Next
            </button>
        </Form>
    );
};

export default SearchForm;
