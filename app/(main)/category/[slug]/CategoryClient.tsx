'use client';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { Category, Product } from '@/types';

interface CategoryClientProps {
    categoryData: Category;
    catProducts: Product[];
    slug: string;
}

export default function CategoryClient({ categoryData, catProducts, slug }: CategoryClientProps) {
    return (
        <div className="min-h-screen bg-surface">
            {/* Hero */}
            <div className={`bg-gradient-to-r ${categoryData.color} py-14 px-4 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 text-white/70 text-xs mb-5">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight size={11} />
                        <span className="text-white font-medium">{categoryData.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-5xl">{categoryData.icon}</span>
                        <div>
                            <h1 className="font-outfit text-3xl sm:text-4xl font-bold text-white">{categoryData.name}</h1>
                            <p className="text-white/80 mt-1 text-sm">{categoryData.description}</p>
                            <p className="text-white/60 text-xs mt-2">{catProducts.length} products found</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Link href="/shop" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-6">
                    <ArrowLeft size={15} /> Back to All Products
                </Link>

                {catProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">📦</p>
                        <p className="font-semibold text-slate-700 mb-2">No products in this category yet</p>
                        <Link href="/shop" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors">
                            Browse All Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {catProducts.map((p) => <ProductCard key={p.id} product={p} />)}
                    </div>
                )}

                {/* Related categories */}
                <div className="mt-14">
                    <h2 className="font-outfit text-xl font-bold text-slate-900 mb-4">Browse Other Categories</h2>
                    <div className="flex flex-wrap gap-3">
                        {categories.filter(c => c.slug !== slug).map(cat => (
                            <Link key={cat.id} href={`/category/${cat.slug}`}
                                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-card hover:border-brand-300 hover:shadow-card-hover text-sm font-medium text-slate-700 hover:text-brand-700 transition-all">
                                {cat.icon} {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
