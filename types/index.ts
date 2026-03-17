export interface Brand {
    name: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    productCount: number;
    image: string;
    color?: string;
    icon?: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    brand: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    images: string[];
    variants: Record<string, string[]>;
    variantPricing: Record<string, number>;
    warranty: string;
    inStock: boolean;
    badge: string | null;
    description: string;
    specs: Record<string, string>;
    features: string[];
}

export interface CartItem {
    key: string;
    id: number;
    name: string;
    slug: string;
    image: string;
    price: number;
    originalPrice: number;
    selectedVariant: Record<string, string>;
    quantity: number;
}

export interface WishlistItem {
    id: number;
    name: string;
    slug: string;
    image: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount?: number;
}
