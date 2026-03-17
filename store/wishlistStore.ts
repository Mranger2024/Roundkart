'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem, Product } from '../types';

interface WishlistState {
    items: WishlistItem[];
    toggleWishlist: (product: Product) => void;
    isWishlisted: (id: number) => boolean;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],

            toggleWishlist: (product) => {
                const exists = get().items.find((i) => i.id === product.id);
                if (exists) {
                    set((s) => ({ items: s.items.filter((i) => i.id !== product.id) }));
                } else {
                    set((s) => ({
                        items: [
                            ...s.items,
                            {
                                id: product.id,
                                name: product.name,
                                slug: product.slug,
                                image: product.images[0],
                                price: product.price,
                                originalPrice: product.originalPrice,
                                discount: product.discount,
                                rating: product.rating,
                            },
                        ],
                    }));
                }
            },

            isWishlisted: (id) => get().items.some((i) => i.id === id),
            clearWishlist: () => set({ items: [] }),
        }),
        { name: 'roundkart-wishlist' }
    )
);
