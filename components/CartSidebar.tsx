'use client';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useEffect } from 'react';

interface CartSidebarProps {
    open: boolean;
    onClose: () => void;
}

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
    const items = useCartStore((s) => s.items);
    const updateQuantity = useCartStore((s) => s.updateQuantity);
    const removeFromCart = useCartStore((s) => s.removeFromCart);

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

    // Lock body scroll
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = open ? 'hidden' : '';
        }
        return () => { if (typeof window !== 'undefined') document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[380px] bg-[#f1f3f6] z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="bg-brand-500 text-white px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ShoppingCart size={20} />
                        <h2 className="font-bold text-base uppercase tracking-wider">My Cart ({totalItems})</h2>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Items Area */}
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full bg-white border border-gray-200 p-8 text-center">
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/empty-cart_ee6141.png" className="w-40 mb-4 opacity-50" alt="Empty" />
                            <p className="font-bold text-gray-800">Your cart is empty!</p>
                            <p className="text-sm text-gray-400 mt-1">Add items to it now.</p>
                            <button onClick={onClose} className="mt-6 bg-brand-500 text-white px-8 py-2.5 rounded-sm font-bold shadow-md uppercase tracking-tight text-sm">Shop Now</button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.key} className="bg-white p-3 border border-gray-200 flex gap-4">
                                <div className="w-20 h-20 p-1 border border-gray-50 flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight mb-1">{item.name}</p>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-base font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</span>
                                        {item.originalPrice > item.price && (
                                            <span className="text-xs text-green-700 font-bold">{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% Off</span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-gray-200 rounded-sm">
                                            <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="px-2 py-0.5 text-gray-400 hover:bg-gray-50">-</button>
                                            <span className="px-2 text-xs font-bold text-gray-800 border-x border-gray-200">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="px-2 py-0.5 text-gray-400 hover:bg-gray-50">+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.key)} className="text-xs font-bold text-gray-400 hover:text-red-500 uppercase">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Section */}
                {items.length > 0 && (
                    <div className="bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-lg font-bold text-gray-900">₹{total.toLocaleString()}</p>
                                <p className="text-[10px] text-brand-500 font-bold uppercase tracking-tight flex items-center gap-1">
                                    <ShieldCheck size={10} /> All taxes included
                                </p>
                            </div>
                            <Link
                                href="/cart"
                                onClick={onClose}
                                className="bg-[#fb641b] text-white px-8 py-3 rounded-sm font-bold shadow-lg uppercase tracking-tight text-sm flex items-center gap-2"
                            >
                                Checkout <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
