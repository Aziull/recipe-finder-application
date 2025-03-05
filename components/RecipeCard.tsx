import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface RecieCardProps {
    id: number,
    image: string,
    title: string,
    classNames?: string
}

const RecipeCard = ({
    id,
    image,
    title,
    classNames
}: RecieCardProps) => {
    return (
        <Link href={`/recipes/${id}`} className={cn("block", classNames, "transition-shadow duration-300 hover:shadow-lg")}>
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-2 transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl md:text-lg  font-semibold text-center">{title}</h2>
        </Link>
    )
}

export default RecipeCard
