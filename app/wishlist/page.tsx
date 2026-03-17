'use client';
import Link from 'next/link';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import { WishlistItem, Product } from '@/types';

export default function WishlistPage() {
    const items = useWishlistStore((s) => s.items);
    const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
    const addToCart = useCartStore((s) => s.addToCart);

    const moveToCart = (item: WishlistItem) => {
        // Construct a full product object that satisfies the Product interface
        const productForCart: Product = {
            id: item.id,
            name: item.name,
            slug: item.slug,
            category: '',
            brand: 'RoundKart',
            price: item.price,
            originalPrice: item.originalPrice,
            discount: item.discount,
            rating: item.rating,
            reviewCount: item.reviewCount || 0,
            images: [item.image],
            variants: {},
            variantPricing: {},
            warranty: '1 Year',
            inStock: true,
            badge: null,
            description: '',
            specs: {},
            features: [],
        };

        addToCart(productForCart, {});
        // Remove from wishlist after adding to cart
        toggleWishlist(productForCart); 
        
        toast.success('Moved to cart!', { style: { borderRadius: '4px', fontSize: '12px' } });
    };

    return (
        <div className="bg-[#f1f3f6] min-h-screen py-6">
            <div className="max-w-7xl mx-auto px-2">

                <div className="bg-white shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Heart size={24} className="text-brand-500 fill-brand-500" />
                            <h1 className="text-xl font-bold text-gray-900">My Wishlist ({items.length})</h1>
                        </div>
                        <Link href="/shop" className="text-brand-500 font-bold text-sm uppercase tracking-tight">Continue Shopping</Link>
                    </div>

                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                                <Heart size={44} className="text-gray-200" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Empty Wishlist!</h2>
                            <p className="text-gray-500 text-sm max-w-xs">You have no items in your wishlist. Start adding!</p>
                            <Link href="/shop" className="mt-4 bg-brand-500 text-white px-10 py-3 rounded-sm font-bold shadow-md uppercase tracking-tight inline-block">Explore Now</Link>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {items.map((item) => (
                                <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                                    <div className="w-24 h-24 p-2 border border-gray-50 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/shop/${item.slug}`} className="text-lg font-medium text-gray-900 hover:text-brand-500 transition-colors line-clamp-1 mb-1">{item.name}</Link>
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="bg-success text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-0.5">
                                                {item.rating || '4.5'} ★
                                            </div>
                                            <span className="text-xs text-gray-400">({item.reviewCount?.toLocaleString() || '1,248'} reviews)</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                                            {item.originalPrice > item.price && (
                                                <span className="text-sm text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</span>
                                            )}
                                            <span className="text-green-700 font-bold text-sm">{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                                        <button
                                            onClick={() => moveToCart(item)}
                                            className="flex items-center justify-center gap-2 bg-[#ff9f00] text-white px-8 py-2.5 rounded-sm font-bold shadow-md uppercase tracking-tight text-xs whitespace-nowrap"
                                        >
                                            <ShoppingCart size={14} /> Add To Cart
                                        </button>
                                        <button
                                            onClick={() => {
                                                const p: Product = {
                                                    id: item.id,
                                                    name: item.name,
                                                    slug: item.slug,
                                                    category: '',
                                                    brand: '',
                                                    price: item.price,
                                                    originalPrice: item.originalPrice,
                                                    discount: item.discount,
                                                    rating: item.rating,
                                                    reviewCount: item.reviewCount || 0,
                                                    images: [item.image],
                                                    variants: {},
                                                    variantPricing: {},
                                                    warranty: '',
                                                    inStock: true,
                                                    badge: null,
                                                    description: '',
                                                    specs: {},
                                                    features: [],
                                                };
                                                toggleWishlist(p);
                                            }}
                                            className="flex items-center justify-center gap-2 bg-white text-gray-500 hover:text-red-500 border border-gray-200 py-2.5 rounded-sm font-bold text-xs uppercase tracking-tight"
                                        >
                                            <Trash2 size={14} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
