'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
    ShoppingCart, 
    Heart, 
    Star, 
    Truck, 
    Shield, 
    RefreshCw, 
    Check, 
    ChevronRight, 
    Building2,
    FileText,
    ArrowUpRight,
    Lock,
    Zap
} from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import toast from 'react-hot-toast';
import { Product } from '@/types';

interface ProductDetailClientProps {
    product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [selectedVariant, setSelectedVariant] = useState<string>(product.variants?.capacity?.[0] || '');
    const [qty, setQty] = useState<number>(1);

    const addToCart = useCartStore((s) => s.addToCart);
    const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
    const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));
    const related = getRelatedProducts(product.id, product.category);

    const handleAddToCart = () => {
        const variantObj: Record<string, string> = selectedVariant ? { capacity: selectedVariant } : {};
        for (let i = 0; i < qty; i++) addToCart(product, variantObj);
        toast.success('Added to cart!', { style: { borderRadius: '4px', fontSize: '12px' } });
    };

    const handleWishlist = () => {
        toggleWishlist(product);
        toast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️', { style: { borderRadius: '4px', fontSize: '12px' } });
    };

    const displayPrice = product.variantPricing?.[selectedVariant] || product.price;
    const gstSavings = Math.round(displayPrice * 0.18);

    return (
        <div className="bg-white min-h-screen pb-24 font-outfit">

            {/* Institutional Header / Breadcrumb */}
            <div className="bg-[#0f1923] border-b border-slate-800 relative py-4">
                <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 italic overflow-x-auto no-scrollbar whitespace-nowrap">
                    <Link href="/" className="hover:text-brand-500 flex-shrink-0">Home</Link>
                    <ChevronRight size={10} className="flex-shrink-0 text-slate-700" />
                    <Link href="/shop" className="hover:text-brand-500 flex-shrink-0">Catalogue</Link>
                    <ChevronRight size={10} className="flex-shrink-0 text-slate-700" />
                    <Link href={`/category/${product.category}`} className="hover:text-brand-500 capitalize flex-shrink-0">{product.category.replace('-', ' ')}</Link>
                    <ChevronRight size={10} className="flex-shrink-0 text-slate-700" />
                    <span className="text-white truncate min-w-0">SKU: {product.id}-{product.brand.substring(0,3).toUpperCase()}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* ── LEFT: Technical Image Hub ── */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-24 self-start">
                        <div className="flex flex-col gap-6">
                            {/* Main Display */}
                            <div className="relative aspect-square border border-slate-100 bg-slate-50/30 p-12 transition-all group overflow-hidden">
                                <img 
                                    src={product.images[selectedImg]} 
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                                    alt={product.name} 
                                />
                                <button 
                                    onClick={handleWishlist} 
                                    className="absolute top-6 right-6 p-3 bg-white border border-slate-100 shadow-sm text-slate-300 hover:text-red-500 transition-colors"
                                >
                                    <Heart size={20} fill={isWishlisted ? '#ef4444' : 'none'} className={isWishlisted ? 'text-red-500' : ''} />
                                </button>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <div className="bg-[#0f1923] text-white text-[9px] font-black px-3 py-1.5 flex items-center gap-2 uppercase tracking-[0.2em] italic">
                                        <Building2 size={12} className="text-brand-500" /> Authorized Hub
                                    </div>
                                </div>
                            </div>

                            {/* Technical Thumbnails */}
                            <div className="flex gap-3 overflow-x-auto no-scrollbar">
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onMouseEnter={() => setSelectedImg(i)}
                                        className={`w-20 h-20 border-2 flex-shrink-0 p-2 transition-all ${selectedImg === i ? 'border-[#0f1923]' : 'border-slate-100 bg-slate-50 hover:border-brand-200'}`}
                                    >
                                        <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="" />
                                    </button>
                                ))}
                            </div>

                            {/* Datasheet Link */}
                            <button className="flex items-center justify-between p-6 border border-slate-100 bg-slate-50 group hover:bg-[#0f1923] transition-all">
                                <div className="flex items-center gap-4">
                                    <FileText size={24} className="text-brand-600 group-hover:text-brand-500" />
                                    <div className="text-left">
                                        <p className="text-xs font-black text-[#0f1923] group-hover:text-white uppercase italic tracking-widest">Download Datasheet</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">PDF • Technical Specifications</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-white" />
                            </button>
                        </div>
                    </div>

                    {/* ── RIGHT: Sourcing & Configuration Hub ── */}
                    <div className="flex-1 min-w-0">
                        {/* Brand Header */}
                        <div className="mb-8 pb-8 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-brand-500 text-white text-[10px] font-black px-2 py-0.5 uppercase italic italic tracking-widest">Premium Partner</span>
                                <span className="text-slate-300">|</span>
                                <p className="text-slate-400 font-black uppercase text-[11px] tracking-[0.2em] italic">{product.brand}</p>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-[#0f1923] leading-none tracking-tighter mb-6 italic uppercase">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 border border-emerald-100">
                                    <Zap size={14} fill="currentColor" />
                                    <span className="text-[11px] font-black uppercase italic tracking-tighter">Authorized Stock active</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <div className="flex gap-0.5">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= Math.floor(product.rating) ? "currentColor" : "none"} className={s <= Math.floor(product.rating) ? "text-brand-500" : "text-slate-200"} />)}
                                    </div>
                                    <span className="text-[10px] font-bold italic tracking-widest uppercase">{product.rating} Performance Score</span>
                                </div>
                            </div>
                        </div>

                        {/* Inventory & Pricing Hub */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 border border-slate-100 bg-slate-50/50 relative overflow-hidden">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Institutional Pricing</p>
                                <div className="flex items-baseline gap-3 mb-4">
                                    <span className="text-4xl font-black text-[#0f1923] italic tracking-tighter">₹{displayPrice.toLocaleString()}</span>
                                    {product.originalPrice > displayPrice && (
                                        <span className="text-sm text-slate-400 font-bold line-through italic">₹{product.originalPrice.toLocaleString()}</span>
                                    )}
                                </div>
                                <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1 rounded-sm shadow-lg">
                                    <Lock size={10} className="text-emerald-300" />
                                    <span className="text-[10px] font-black uppercase italic tracking-tighter">GST Inclusive</span>
                                </div>
                                <Building2 size={80} className="absolute -right-4 -bottom-4 text-slate-100 opacity-50" />
                            </div>

                            <div className="p-8 border border-brand-100 bg-brand-50/30 relative">
                                <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-2 italic">Procurement Insight</p>
                                <p className="text-2xl font-black text-[#0f1923] italic mb-1 leading-none tracking-tighter">₹{gstSavings.toLocaleString()}</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Estimated GST Input Credit</p>
                                <div className="mt-4 pt-4 border-t border-brand-100/50">
                                    <Link href="/business-credit" className="text-[10px] font-black text-brand-600 uppercase italic border-b border-brand-200">View Enterprise Credit Terms →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Configuration Hub */}
                        {product.variants?.capacity && (
                            <div className="mb-12">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 italic">Equipment Configuration</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {product.variants.capacity.map((cap) => (
                                        <button
                                            key={cap}
                                            onClick={() => setSelectedVariant(cap)}
                                            className={`p-6 border-2 transition-all text-left relative ${selectedVariant === cap ? 'bg-[#0f1923] border-[#0f1923] text-white' : 'border-slate-100 bg-white text-slate-500 hover:border-brand-200'}`}
                                        >
                                            <p className="text-[10px] font-black uppercase italic tracking-tighter mb-1 opacity-60">Capacity</p>
                                            <p className="text-sm font-black italic uppercase leading-none">{cap}</p>
                                            <p className={`text-[10px] font-bold mt-2 ${selectedVariant === cap ? 'text-brand-500' : 'text-slate-400'}`}>₹{product.variantPricing?.[cap]?.toLocaleString() || product.price.toLocaleString()}</p>
                                            {selectedVariant === cap && <Check size={14} className="absolute top-4 right-4 text-brand-500" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Major CTA Sourcing Hub */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button onClick={handleAddToCart} className="flex-[2] bg-[#0f1923] hover:bg-brand-600 text-white py-6 px-10 font-black text-xs uppercase tracking-[0.3em] italic transition-all shadow-xl flex items-center justify-center gap-4">
                                <ShoppingCart size={18} /> Add to Bulk Cart
                            </button>
                            <Link href="/contact" className="flex-1 border-2 border-[#0f1923] text-[#0f1923] py-6 px-8 font-black text-xs uppercase tracking-[0.2em] italic transition-all hover:bg-slate-50 flex items-center justify-center text-center">
                                Request Quote
                            </Link>
                        </div>

                        {/* SLA & Logistics Hub */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 border border-slate-100 bg-slate-50/50">
                            <div className="flex flex-col gap-2">
                                <Truck size={20} className="text-brand-600" />
                                <p className="text-[10px] font-black text-[#0f1923] uppercase italic">Priority Transit</p>
                                <p className="text-[10px] text-slate-500 font-bold leading-tight">Zero-defect logistics for institutional supply.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Shield size={20} className="text-brand-600" />
                                <p className="text-[10px] font-black text-[#0f1923] uppercase italic">Direct Warranty</p>
                                <p className="text-[10px] text-slate-500 font-bold leading-tight">{product.warranty} Authorised OEM Support.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <RefreshCw size={20} className="text-brand-600" />
                                <p className="text-[10px] font-black text-[#0f1923] uppercase italic">Replacement SLA</p>
                                <p className="text-[10px] text-slate-500 font-bold leading-tight">Priority 10-day exchange for bulk orders.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TECHNICAL DATA HUB ── */}
                <div className="mt-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Specs Panel */}
                        <div className="flex-[2]">
                            <h2 className="text-2xl font-black text-[#0f1923] italic uppercase tracking-tighter mb-10 pb-4 border-b-2 border-[#0f1923] inline-block">
                                Technical Specifications
                            </h2>
                            <div className="grid grid-cols-1 gap-px bg-slate-100 border border-slate-100">
                                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex bg-white group hover:bg-slate-50 transition-colors">
                                        <div className="w-1/3 p-6 bg-slate-50/50 group-hover:bg-slate-100/50 border-r border-slate-100">
                                            <p className="text-[10px] font-black text-slate-400 group-hover:text-[#0f1923] uppercase tracking-widest italic">{key}</p>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <p className="text-sm font-bold text-[#0f1923] italic">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description Panel */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-black text-[#0f1923] italic uppercase tracking-tighter mb-10 pb-4 border-b-2 border-slate-100 inline-block">
                                Performance Overview
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 text-sm font-medium leading-loose italic">
                                    {product.description}
                                </p>
                            </div>
                            
                            <div className="mt-12 p-8 border border-slate-100 bg-slate-50 inline-block">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white shadow-sm"><Building2 size={24} className="text-brand-600" /></div>
                                    <div>
                                        <p className="text-xs font-black text-[#0f1923] uppercase italic tracking-widest">Authorized Source</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Direct OEM fulfillment ensured.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CROSS-SOURCING HUB ── */}
                {related.length > 0 && (
                    <div className="mt-32">
                        <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-3xl font-black text-[#0f1923] italic uppercase leading-none tracking-tighter mb-2">Cross-Sourcing Recommendations</h2>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Institutional bundles optimized for scale</p>
                            </div>
                            <Link href="/shop" className="bg-[#0f1923] text-white px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] italic hover:bg-brand-600 transition-all shadow-xl">
                                Catalogue Hub
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {related.map((p) => <ProductCard key={p.id} product={p} hideBadge={true} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
