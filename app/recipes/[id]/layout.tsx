// app/recipe/[id]/layout.tsx
import React from 'react';

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-full'>
      {children}
    </main>
  );
};