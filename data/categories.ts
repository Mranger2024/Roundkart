import { Category, Brand } from '../types';

export const categories: Category[] = [
    {
        id: 1,
        name: 'Pressure Cookers',
        slug: 'pressure-cookers',
        description: 'ISI-certified pressure cookers ranging from 3L to 20L, engineered for Indian kitchens and commercial canteens.',
        productCount: 4,
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
    },
    {
        id: 2,
        name: 'Rice Cookers',
        slug: 'rice-cookers',
        description: 'Precision electric rice cookers with keep-warm functionality, available for household and bulk institutional use.',
        productCount: 3,
        image: 'https://images.unsplash.com/photo-1574894709920-11b28be1b2c1?w=600&q=80',
    },
    {
        id: 3,
        name: 'Nonstick Cookware',
        slug: 'nonstick-cookware',
        description: 'PFOA-free, food-grade non-stick cookware including tawas, kadais, and specialty pans from certified manufacturers.',
        productCount: 6,
        image: 'https://images.unsplash.com/photo-1612152328957-e23a7c8c5aad?w=600&q=80',
    },
    {
        id: 4,
        name: 'Mixer Grinders',
        slug: 'mixer-grinders',
        description: 'High-torque 750W+ mixer grinders with multiple jar configurations, suited for domestic and commercial operations.',
        productCount: 3,
        image: 'https://images.unsplash.com/photo-1701638291628-60c2f35eac54?w=600&q=80',
    },
    {
        id: 5,
        name: 'Ceiling Fans',
        slug: 'ceiling-fans',
        description: 'BEE-rated BLDC ceiling fans delivering superior energy efficiency, available in standard and premium decorative variants.',
        productCount: 3,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
        id: 6,
        name: 'Water Heaters',
        slug: 'water-heaters',
        description: 'BEE 5-Star rated storage and instant water heaters with advanced anti-corrosion inner tank technology.',
        productCount: 2,
        image: 'https://images.unsplash.com/photo-1564329014355-ea85b3c1e47d?w=600&q=80',
    },
    {
        id: 7,
        name: 'Electric Irons',
        slug: 'electric-irons',
        description: 'Steam and dry electric irons with temperature control and non-stick soleplates for professional-grade fabric care.',
        productCount: 2,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
];

export const brands: Brand[] = [
    { name: 'Prestige' },
    { name: 'Hawkins' },
    { name: 'Bajaj' },
    { name: 'Philips' },
    { name: 'Orient' },
    { name: 'Havells' },
    { name: 'Racold' },
    { name: 'AO Smith' },
    { name: 'Polar' },
    { name: 'Vinod' },
];
