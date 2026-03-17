'use client';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { Heart, Star, Building2, ShieldCheck } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import toast from 'react-hot-toast';
import { Product } from '@/types';

interface ProductCardProps {
    product: Product;
    hideBadge?: boolean;
}

export default function ProductCard({ product, hideBadge = false }: ProductCardProps) {
    const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
    const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));

    const handleWishlist = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        toast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️', {
            style: { borderRadius: '4px', fontSize: '12px' },
        });
    };

    const gstSavings = Math.round(product.price * 0.18);

    return (
        <Link href={`/shop/${product.slug}`} className="group bg-white flex flex-col h-full border border-slate-100 hover:border-brand-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden font-outfit">
            <div className="p-4 flex flex-col h-full">

                {/* Image Section */}
                <div className="relative aspect-square w-full mb-5 overflow-hidden bg-slate-50/50 p-4 border border-slate-50">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-red-500"
                        aria-label="Toggle wishlist"
                    >
                        <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} className={isWishlisted ? 'text-red-500' : ''} />
                    </button>

                    {/* Institutional Badge */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <div className="bg-[#0f1923] text-white text-[9px] font-black px-2 py-1 flex items-center gap-1 uppercase tracking-widest italic shadow-lg">
                            <Building2 size={10} className="text-brand-500" /> B2B Sourcing
                        </div>
                        {!hideBadge && product.badge && (
                            <div className="bg-brand-500 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest italic shadow-lg">
                                {product.badge}
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="flex flex-col flex-1">
                    <div className="mb-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">{product.brand}</p>
                        <h3 className="text-sm font-bold text-[#0f1923] line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                            {product.name}
                        </h3>
                    </div>

                    {/* Specs Preview (B2B Highlight) */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-0.5 text-brand-600">
                            <ShieldCheck size={12} />
                            <span className="text-[10px] font-black uppercase tracking-tight italic">Authorized</span>
                        </div>
                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        <div className="flex items-center gap-0.5 text-slate-400">
                            <Star size={10} fill="currentColor" />
                            <span className="text-[10px] font-bold italic">{product.rating} ({product.reviewCount})</span>
                        </div>
                    </div>

                    {/* Price Block (Institutional Focus) */}
                    <div className="mt-auto border-t border-slate-50 pt-4">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-black text-[#0f1923] italic">₹{product.price.toLocaleString()}</span>
                                {product.originalPrice > product.price && (
                                    <span className="text-[10px] text-slate-400 line-through font-bold">₹{product.originalPrice.toLocaleString()}</span>
                                )}
                            </div>
                            
                            {/* GST Saving Insight */}
                            <div className="mt-1 inline-flex items-center gap-1 text-emerald-600">
                                <span className="text-[10px] font-black uppercase italic tracking-tighter">Save ₹{gstSavings.toLocaleString()} via GST Input</span>
                            </div>
                        </div>

                        {/* Inventory Stats */}
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight italic">Bulk Stock Active</p>
                            <div className="h-1.5 w-12 bg-slate-100 overflow-hidden">
                                <div className="h-full bg-brand-500 w-3/4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
