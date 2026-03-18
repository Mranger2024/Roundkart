// Server Component — resolves params then delegates to client component
import CategoryClient from './CategoryClient';
import { getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import { notFound } from 'next/navigation';

export interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const categoryData = categories.find((c) => c.slug === slug);
    if (!categoryData) notFound();
    const catProducts = getProductsByCategory(slug);
    return <CategoryClient categoryData={categoryData} catProducts={catProducts} slug={slug} />;
}
