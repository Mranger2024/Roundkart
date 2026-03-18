'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, MapPin, Globe, ChevronDown, User, Package, Store, Headphones, Building2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import CartSidebar from './CartSidebar';
import { categories } from '@/data/categories';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const [searchCat, setSearchCat] = useState('All');

    const cartItems = useCartStore((s) => s.items);
    const wishlistItems = useWishlistStore((s) => s.items);
    const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <>
            {/* ── TOP UTILITY STRIP (Hidden on smallest mobile) ────────── */}
            <div className="bg-[#0f1111] text-white text-[10px] sm:text-[11px] py-1.5 px-4 hidden sm:block elementor-hidden-mobile">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-4">
                        <span className="text-gray-400 hidden lg:inline">RoundKart — Home Appliances &amp; Kitchen Equipment</span>
                        <Link href="/track" className="hover:text-brand-400 transition-colors">Track Your Order</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/support" className="hover:text-brand-400">Support</Link>
                        <span className="w-px h-3 bg-gray-700"></span>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-brand-400">
                            <Globe size={11} /> <span>India | EN</span> <ChevronDown size={10} />
                        </div>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 z-50 w-full shadow-lg">

                {/* ── MAIN NAV (PREMIUM GRADIENT) ─────────────────────────── */}
                <div className="bg-gradient-to-r from-[#131921] via-[#232f3e] to-[#131921] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-2.5 flex items-center justify-between gap-2 sm:gap-4">

                        {/* Mobile Menu Toggle (Leftmost on mobile) */}
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden elementor-hidden-desktop p-1.5 text-gray-300 hover:text-white mr-1 -ml-1">
                            <Menu size={22} />
                        </button>

                        {/* Logo - Compact on mobile */}
                        <Link href="/" className="flex items-center gap-2 flex-shrink-0 group mr-auto md:mr-0">
                            <div className="w-8 h-8 md:w-11 md:h-11 bg-white rounded-md md:rounded-lg flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                                <span className="text-[#132137] font-black text-lg md:text-2xl leading-none">R</span>
                            </div>
                            <div className="hidden sm:block elementor-hidden-mobile">
                                <p className="font-black text-white text-base md:text-xl uppercase tracking-tighter leading-none">RoundKart</p>
                                <p className="text-[8px] md:text-[10px] text-brand-400 font-bold uppercase tracking-[0.2em] leading-none mt-1 group-hover:text-white transition-colors">Home Appliances &amp; Kitchen</p>
                            </div>
                        </Link>

                        {/* ── INTEGRATED CATEGORY SEARCH (DESKTOP) ─────────────── */}
                        <div className="hidden md:flex elementor-hidden-mobile elementor-hidden-tablet flex-1 max-w-2xl mx-4 relative group">
                            <div className="flex w-full bg-white rounded-md overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-brand-500 transition-all">
                                <div className="relative flex-shrink-0">
                                    <select
                                        value={searchCat}
                                        onChange={(e) => setSearchCat(e.target.value)}
                                        className="h-full bg-gray-100 text-gray-700 px-3 pl-4 pr-8 text-xs font-bold border-r border-gray-300 outline-none hover:bg-gray-200 cursor-pointer appearance-none"
                                    >
                                        <option>All</option>
                                        {categories.map(c => <option key={c.id}>{c.name}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search 100,000+ premium products..."
                                    value={searchVal}
                                    onChange={e => setSearchVal(e.target.value)}
                                    className="flex-1 text-slate-900 px-4 py-2.5 outline-none text-sm placeholder:text-slate-400 font-medium"
                                />
                                <button className="bg-brand-500 hover:bg-brand-600 px-6 text-white transition-colors flex items-center justify-center">
                                    <Search size={22} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* ── RIGHT ACTIONS ──────────────────────────────────── */}
                        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8 flex-shrink-0">

                            {/* Account - Desktop Only */}
                            <button className="hidden sm:flex elementor-hidden-mobile flex-col text-left group">
                                <span className="text-[10px] text-gray-400 font-bold leading-tight uppercase opacity-80 group-hover:text-white transition-opacity">Hello, Sign In</span>
                                <span className="text-sm font-bold text-white flex items-center gap-1 group-hover:text-brand-400">
                                    Account <ChevronDown size={14} />
                                </span>
                            </button>

                            {/* Wishlist Icon */}
                            <Link href="/wishlist" className="relative group p-1 transition-transform hover:-translate-y-0.5">
                                <Heart size={22} strokeWidth={2} className="text-gray-300 group-hover:text-brand-400" />
                                {wishlistItems.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#fb641b] text-white text-[9px] md:text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#232f3e]">
                                        {wishlistItems.length}
                                    </span>
                                )}
                            </Link>

                            {/* Cart Component */}
                            <button onClick={() => setCartOpen(true)} className="flex items-center gap-2 md:gap-3 group relative px-1 py-1">
                                <div className="relative">
                                    <ShoppingCart size={24} strokeWidth={1.5} className="text-gray-300 group-hover:text-brand-400 md:hidden elementor-hidden-desktop" />
                                    <ShoppingCart size={28} strokeWidth={1.5} className="text-gray-300 group-hover:text-brand-400 hidden md:block elementor-hidden-mobile" />
                                    {totalItems > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#fb641b] text-white text-[9px] md:text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#232f3e]">
                                            {totalItems}
                                        </span>
                                    )}
                                </div>
                                <div className="hidden lg:flex elementor-hidden-mobile elementor-hidden-tablet flex-col text-left">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase leading-tight opacity-80">My Shopping</span>
                                    <span className="text-sm font-black text-white group-hover:text-brand-400">Checkout</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* ── MOBILE SEARCH BAR (Prominent on small screens) ────────── */}
                    <div className="md:hidden elementor-hidden-desktop px-3 pb-2.5">
                        <div className="flex w-full bg-white rounded-md overflow-hidden shadow-lg border border-gray-700/50 h-10">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 px-3 py-2 text-[14px] text-slate-800 outline-none placeholder:text-gray-400"
                            />
                            <button className="px-4 text-white bg-brand-500 hover:bg-brand-600 transition-colors">
                                <Search size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── SECONDARY NAV / PAGE MENU (CENTERED) ──────── */}
                <div className="bg-white border-b border-slate-200 relative group/nav">
                    <div className="max-w-7xl mx-auto flex items-center h-10 md:h-12 px-3 md:px-4">
                        
                        {/* 1. Left Section: Categories */}
                        <div className="flex-shrink-0 pr-2 border-r border-slate-100 md:border-none mr-2 md:mr-0">
                            <Link href="/shop" className="flex items-center gap-1.5 text-gray-700 hover:text-brand-500 font-bold text-[11px] md:text-[12px] uppercase tracking-wide group transition-colors">
                                <Menu size={14} className="text-brand-500 group-hover:scale-110 transition-transform" />
                                <span className="hidden lg:inline elementor-hidden-mobile elementor-hidden-tablet">All Categories</span>
                                <span className="lg:hidden elementor-hidden-desktop text-[10px]">Shop</span>
                            </Link>
                        </div>

                        <div 
                            className="flex-1 flex justify-center overflow-x-auto relative"
                            style={{ 
                                msOverflowStyle: 'none', 
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch' 
                            }}
                        >
                            <style jsx>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {/* Fading indicators for mobile scroll */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 md:hidden" />
                            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent z-10 md:hidden" />
                            
                            <nav className="flex items-center gap-1 sm:gap-6 whitespace-nowrap px-2">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'Shop', href: '/shop' },
                                    { name: 'About', href: '/about' },
                                    { name: 'Services', href: '/services' },
                                    { name: 'Contact', href: '/contact' },
                                    { name: 'Business Credit', href: '/business-credit' }
                                ].map((page, idx) => (
                                    <Link
                                        key={idx}
                                        href={page.href}
                                        className={`text-[10px] md:text-[12px] font-bold uppercase tracking-wider px-2 py-3 transition-colors ${page.name === 'Business Credit' ? 'text-brand-600 bg-brand-50 rounded-sm' : 'text-gray-600 hover:text-brand-500'}`}
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* 3. Right Section: Business Hub */}
                        <div className="flex-shrink-0 pl-2 border-l border-slate-100 md:border-none ml-2 md:mr-0">
                            <Link href="/contact" className="text-[10px] md:text-[12px] font-black text-brand-600 flex items-center gap-1 md:gap-1.5 hover:underline decoration-2 underline-offset-4 uppercase tracking-tighter bg-brand-50/50 px-2 py-1 rounded-sm">
                                <Building2 size={13} className="md:scale-110" /> 
                                <span className="hidden sm:inline elementor-hidden-mobile">Business Hub</span>
                                <span className="sm:hidden elementor-hidden-desktop elementor-hidden-tablet tracking-normal">B2B</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Side Drawer Menu */}
            <div className={`fixed inset-0 z-[100] transition-opacity duration-300 pointer-events-none ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-black/60 shadow-inner" onClick={() => setMobileOpen(false)} />
                <div className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                    {/* Drawer Header */}
                    <div className="bg-[#131921] p-6 text-white text-center">
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                            <User size={32} strokeWidth={1.5} />
                        </div>
                        <p className="text-base font-black">Welcome, Guest</p>
                        <button className="mt-2 text-[10px] text-brand-400 font-black uppercase tracking-widest border border-brand-500/30 px-4 py-1.5 rounded-full hover:bg-brand-500/10">Sign In / Join Plus</button>
                    </div>

                    <div className="p-4 overflow-y-auto h-[calc(100vh-160px)] ">

                        {/* Highlights Accordion-like Section */}
                        <div className="bg-gray-50 rounded-lg p-2 mb-6 grid grid-cols-2 gap-2 text-center">
                            <Link href="/track" className="p-2 border border-white hover:border-brand-500 rounded bg-white transition-colors">
                                <Package size={18} className="mx-auto mb-1 text-gray-400" />
                                <span className="text-[9px] font-bold text-gray-600 block">Orders</span>
                            </Link>
                            <Link href="/support" className="p-2 border border-white hover:border-brand-500 rounded bg-white transition-colors">
                                <Headphones size={18} className="mx-auto mb-1 text-gray-400" />
                                <span className="text-[9px] font-bold text-gray-600 block">Support</span>
                            </Link>
                        </div>

                        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 pl-2">Shop Categories</h3>
                        <div className="space-y-1">
                            {categories.map(cat => (
                                <Link key={cat.id} href={`/category/${cat.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-3 px-3 hover:bg-brand-50 rounded-md group transition-all">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl group-hover:scale-125 transition-transform"></span>
                                        <span className="text-sm font-bold text-gray-700 group-hover:text-brand-500">{cat.name}</span>
                                    </div>
                                    <ChevronDown size={14} className="-rotate-90 text-gray-300 group-hover:text-brand-500" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <Link href="/seller" className="flex items-center gap-3 text-[#fb641b] font-black text-sm px-3 p-4 bg-orange-50 rounded-lg mb-4">
                                <Store size={20} /> List Your Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
