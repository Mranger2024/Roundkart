'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartState {
    items: CartItem[];
    addToCart: (product: Product, selectedVariant?: Record<string, string>) => void;
    removeFromCart: (key: string) => void;
    updateQuantity: (key: string, qty: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addToCart: (product, selectedVariant = {}) => {
                const key = `${product.id}-${JSON.stringify(selectedVariant)}`;
                const items = get().items;
                const existing = items.find((i) => i.key === key);
                
                const variantValue = Object.values(selectedVariant)[0];
                const price = variantValue
                    ? product.variantPricing?.[variantValue] ?? product.price
                    : product.price;

                if (existing) {
                    set({
                        items: items.map((i) =>
                            i.key === key ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({
                        items: [
                            ...items,
                            {
                                key,
                                id: product.id,
                                name: product.name,
                                slug: product.slug,
                                image: product.images[0],
                                price,
                                originalPrice: product.originalPrice,
                                selectedVariant,
                                quantity: 1,
                            },
                        ],
                    });
                }
            },

            removeFromCart: (key) =>
                set((s) => ({ items: s.items.filter((i) => i.key !== key) })),

            updateQuantity: (key, qty) =>
                set((s) => ({
                    items: qty <= 0
                        ? s.items.filter((i) => i.key !== key)
                        : s.items.map((i) => (i.key === key ? { ...i, quantity: qty } : i)),
                })),

            clearCart: () => set({ items: [] }),

            totalItems: () => {
                return get().items.reduce((sum, i) => sum + i.quantity, 0);
            },

            totalPrice: () => {
                return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
            },
        }),
        { name: 'roundkart-cart' }
    )
);
