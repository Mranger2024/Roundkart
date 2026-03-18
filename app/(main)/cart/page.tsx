'use client';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

const COUPONS: Record<string, number> = {
    'FIRSTBUY': 10,
    'SAVE15': 15,
    'WELCOME20': 20,
};

type CouponCode = keyof typeof COUPONS;

export default function CartPage() {
    const items = useCartStore((s) => s.items);
    const updateQuantity = useCartStore((s) => s.updateQuantity);
    const removeFromCart = useCartStore((s) => s.removeFromCart);
    const [couponInput, setCouponInput] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState<CouponCode | null>(null);

    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const originalSubtotal = items.reduce((sum, i) => sum + (i.originalPrice || i.price) * i.quantity, 0);
    const discountFromMrp = originalSubtotal - subtotal;
    const shipping = subtotal >= 999 ? 0 : 99;
    const couponDiscount = appliedCoupon ? Math.round(subtotal * (COUPONS[appliedCoupon] / 100)) : 0;
    const total = subtotal + shipping - couponDiscount;

    const applyCoupon = () => {
        const code = couponInput.trim().toUpperCase() as CouponCode;
        if (COUPONS[code]) setAppliedCoupon(code);
    };

    return (
        <div className="bg-[#f1f3f6] min-h-screen py-4">
            <div className="max-w-7xl mx-auto px-2">

                {items.length === 0 ? (
                    <div className="bg-white p-20 text-center shadow-sm border border-gray-200">
                        <div className="flex justify-center mb-6">
                            <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" className="w-64" alt="Empty" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your RoundKart Cart is empty.</h1>
                        <p className="text-gray-500 text-sm mb-6">Explore our bestsellers and start shopping!</p>
                        <Link href="/shop" className="bg-brand-500 text-white px-10 py-3 rounded-sm font-bold shadow-md uppercase tracking-tight inline-block">Shop Now</Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-4">

                        {/* ── 1. Cart Items (Marketplace Style) ────────────────────── */}
                        <div className="flex-1 space-y-2">
                            <div className="bg-white shadow-sm border border-gray-200">
                                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                    <h1 className="text-lg font-bold text-gray-900">RoundKart My Cart ({items.length})</h1>
                                    <p className="text-xs text-brand-500 font-bold flex items-center gap-1 cursor-pointer">
                                        <ShieldCheck size={14} /> Secure Checkout
                                    </p>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {items.map((item) => (
                                        <div key={item.key} className="p-4 flex flex-col md:flex-row gap-6">
                                            {/* Img + Qty */}
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="w-28 h-28 border border-gray-50 p-2 overflow-hidden">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                                </div>
                                                <div className="flex items-center">
                                                    <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30" disabled={item.quantity <= 1}>-</button>
                                                    <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">+</button>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className="flex-1">
                                                <Link href={`/shop/${item.slug}`} className="text-base font-medium text-gray-900 hover:text-brand-500 line-clamp-1 mb-1">{item.name}</Link>
                                                <p className="text-xs text-gray-500 mb-4">Seller: RoundKart Retail</p>

                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-xs text-gray-500 line-through">₹{(item.originalPrice * item.quantity).toLocaleString()}</span>
                                                    <span className="text-lg font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</span>
                                                    <span className="text-xs font-bold text-green-700">Offers Applied</span>
                                                </div>

                                                <div className="flex items-center gap-6 mt-auto">
                                                    <button className="text-sm font-bold text-gray-800 uppercase hover:text-brand-500 transition-colors">Save For Later</button>
                                                    <button onClick={() => removeFromCart(item.key)} className="text-sm font-bold text-gray-800 uppercase hover:text-red-500 transition-colors">Remove</button>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-700 font-medium whitespace-nowrap">
                                                Delivery by tomorrow | <span className="text-green-700 font-bold">Free</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-white sticky bottom-0 border-t border-gray-100 flex justify-end shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                                    <button className="bg-[#fb641b] text-white px-12 py-3.5 rounded-sm font-bold shadow-lg uppercase tracking-tight text-sm">Place Order</button>
                                </div>
                            </div>
                        </div>

                        {/* ── 2. Order Summary (Enterprise Style) ────────────────── */}
                        <div className="w-full lg:w-[380px] space-y-4">

                            {/* Price Details */}
                            <div className="bg-white shadow-sm border border-gray-200">
                                <h3 className="p-4 border-b border-gray-100 text-gray-500 font-bold text-sm uppercase tracking-tight">Price Details</h3>
                                <div className="p-4 space-y-5">
                                    <div className="flex justify-between text-base text-gray-800">
                                        <span>Price ({items.length} items)</span>
                                        <span>₹{originalSubtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-base text-gray-800">
                                        <span>Discount</span>
                                        <span className="text-success">- ₹{discountFromMrp.toLocaleString()}</span>
                                    </div>
                                    {appliedCoupon && (
                                        <div className="flex justify-between text-base text-gray-800">
                                            <span>Coupon ({appliedCoupon})</span>
                                            <span className="text-success">- ₹{couponDiscount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-base text-gray-800">
                                        <span>Delivery Charges</span>
                                        <span className={shipping === 0 ? 'text-success font-bold' : ''}>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                                    </div>

                                    <div className="border-t border-dashed border-gray-200 pt-5 flex justify-between text-lg font-bold text-gray-900 uppercase tracking-tighter">
                                        <span>Total Amount</span>
                                        <span>₹{total.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-gray-100">
                                    <p className="text-success font-bold text-sm">You will save ₹{(discountFromMrp + couponDiscount).toLocaleString()} on this order</p>
                                </div>
                            </div>

                            {/* Coupon Code Block */}
                            <div className="bg-white shadow-sm border border-gray-200 p-4">
                                <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-tighter">Apply Coupon</h3>
                                <div className="flex gap-2">
                                    <input
                                        value={couponInput}
                                        onChange={e => setCouponInput(e.target.value)}
                                        placeholder="Enter Code"
                                        className="flex-1 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm outline-none focus:border-brand-500"
                                    />
                                    <button onClick={applyCoupon} className="text-brand-500 font-bold text-sm px-2 uppercase hover:bg-brand-50">Apply</button>
                                </div>
                                <p className="text-[11px] text-gray-400 mt-2">Available: FIRSTBUY, SAVE15, WELCOME20</p>
                            </div>

                            {/* Trust Footer */}
                            <div className="flex flex-col gap-4 p-4 text-gray-500 text-xs font-bold uppercase tracking-widest text-center">
                                <p className="flex items-center justify-center gap-2"><ShieldCheck size={14} /> Safe and Secure Payments</p>
                                <p>100% Authentic products</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
