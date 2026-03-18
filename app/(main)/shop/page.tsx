'use client';
import { useState, useMemo } from 'react';
import { 
    SlidersHorizontal, 
    X, 
    Search, 
    ChevronRight, 
    Filter, 
    CheckCircle2, 
    ArrowUpDown,
    Building2,
    LayoutGrid,
    Target
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Link from 'next/link';
import { Product } from '@/types';

interface PriceRange {
    label: string;
    min: number;
    max: number;
}

const priceRanges: PriceRange[] = [
    { label: 'Enterprise (< ₹5,000)', min: 0, max: 5000 },
    { label: 'Professional (₹5,000 – ₹15,000)', min: 5000, max: 15000 },
    { label: 'Industrial (₹15,000 – ₹50,000)', min: 15000, max: 50000 },
    { label: 'Large Scale (> ₹50,000)', min: 50000, max: Infinity },
];

interface SortOption {
    label: string;
    val: string;
}

const sortOptions: SortOption[] = [
    { label: 'Sourcing Priority', val: 'featured' },
    { label: 'Price: Low to High', val: 'price_asc' },
    { label: 'Price: High to Low', val: 'price_desc' },
    { label: 'Bulk Availability', val: 'newest' },
];

export default function ShopPage() {
    const [selectedCats, setSelectedCats] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<PriceRange | null>(null);
    const [minRating, setMinRating] = useState<number>(0);
    const [sortBy, setSortBy] = useState<string>('featured');
    const [search, setSearch] = useState<string>('');
    const [showFilters, setShowFilters] = useState<boolean>(false);

    const toggleCat = (slug: string) => {
        setSelectedCats(prev => prev.includes(slug) ? prev.filter(c => c !== slug) : [...prev, slug]);
    };

    const clearAll = () => {
        setSelectedCats([]);
        setPriceRange(null);
        setMinRating(0);
        setSortBy('featured');
        setSearch('');
    };

    const filtered = useMemo(() => {
        let res = [...products];
        if (search) res = res.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
        if (selectedCats.length) res = res.filter(p => selectedCats.includes(p.category));
        if (priceRange) res = res.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
        if (minRating) res = res.filter(p => p.rating >= minRating);

        switch (sortBy) {
            case 'price_asc': return res.sort((a, b) => a.price - b.price);
            case 'price_desc': return res.sort((a, b) => b.price - a.price);
            case 'newest': return res.sort((a, b) => (b.id as number) - (a.id as number));
            default: return res;
        }
    }, [selectedCats, priceRange, minRating, sortBy, search]);

    const hasFilters = selectedCats.length > 0 || priceRange !== null || minRating > 0 || search !== '';

    return (
        <div className="bg-white min-h-screen font-outfit">

            {/* ── Procurement Hero ────────────────────────────── */}
            <section className="bg-[#0f1923] py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-400 px-4 py-2 rounded-sm mb-6">
                            Institutional Sourcing Hub
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6 italic uppercase">
                            Procurement <span className="text-brand-500 not-italic">Catalogue</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            Access India's most technical inventory of authorized home appliances, optimized for large-scale project fulfillment and GST transparency.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-600/5 to-transparent flex items-center justify-end pr-20 opacity-20 pointer-events-none">
                    <LayoutGrid size={400} className="text-brand-500 rotate-12" />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* ── 1. Sourcing Dashboard (Sidebar) ─────────────────── */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 bg-white border border-slate-100 p-8 shadow-sm self-start sticky top-24">
                        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-50">
                            <h3 className="text-sm font-black text-[#0f1923] uppercase italic flex items-center gap-2 tracking-widest">
                                <Filter size={16} className="text-brand-600" /> Sourcing Filters
                            </h3>
                            {hasFilters && <button onClick={clearAll} className="text-[10px] text-brand-600 font-black uppercase border-b border-brand-200">Reset</button>}
                        </div>

                        {/* Search in Sidebar */}
                        <div className="mb-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Manufacturer Search</p>
                            <div className="relative group">
                                <Search size={14} className="absolute left-0 bottom-3 text-slate-300 group-focus-within:text-brand-600 transition-colors" />
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search brand or product..."
                                    className="w-full text-sm border-b border-slate-100 outline-none pb-2 pl-6 focus:border-brand-500 font-bold text-[#0f1923] placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        {/* Categories List */}
                        <div className="mb-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Procurement Category</p>
                            <div className="space-y-3">
                                {categories.map((cat) => (
                                    <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-4 h-4 border-2 flex items-center justify-center transition-all ${selectedCats.includes(cat.slug) ? 'bg-brand-600 border-brand-600' : 'border-slate-200 bg-white group-hover:border-brand-300'}`}>
                                            {selectedCats.includes(cat.slug) && <X size={10} className="text-white" />}
                                        </div>
                                        <input type="checkbox" checked={selectedCats.includes(cat.slug)} onChange={() => toggleCat(cat.slug)} className="hidden" />
                                        <span className={`text-xs font-bold uppercase italic tracking-tight transition-colors ${selectedCats.includes(cat.slug) ? 'text-[#0f1923]' : 'text-slate-500 group-hover:text-brand-600'}`}>
                                            {cat.name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Project Scale</p>
                            <div className="space-y-4">
                                {priceRanges.map((r) => (
                                    <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${JSON.stringify(priceRange) === JSON.stringify(r) ? 'border-brand-600' : 'border-slate-200'}`}>
                                            {JSON.stringify(priceRange) === JSON.stringify(r) && <div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />}
                                        </div>
                                        <input type="radio" name="price" checked={JSON.stringify(priceRange) === JSON.stringify(r)} onChange={() => setPriceRange(r)} className="hidden" />
                                        <span className={`text-xs font-bold italic tracking-tight transition-colors ${JSON.stringify(priceRange) === JSON.stringify(r) ? 'text-[#0f1923]' : 'text-slate-500 group-hover:text-brand-600'}`}>{r.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Institutional Impact Disclaimer */}
                        <div className="bg-slate-50 p-6 border-l-2 border-brand-500">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 size={14} className="text-brand-600" />
                                <p className="text-[10px] font-black text-[#0f1923] uppercase italic">B2B Advantage</p>
                            </div>
                            <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Pricing shown is inclusive of GST. Business accounts are eligible for Input Tax Credit optimization.</p>
                        </div>
                    </aside>

                    {/* ── 2. Results Section ──────────────────────────────────────── */}
                    <main className="flex-1 min-w-0">

                        {/* Sorting Hub */}
                        <div className="bg-white border-b border-slate-100 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6">
                            <div className="flex items-center gap-4 self-start sm:self-center">
                                <div className="p-2 bg-slate-50 text-brand-600"><Target size={18} /></div>
                                <div>
                                    <p className="text-sm font-black text-[#0f1923] uppercase italic leading-none">{filtered.length} Items Found</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Authorized Inventory Hub</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                                <div className="flex items-center gap-2 text-slate-400 shrink-0">
                                    <ArrowUpDown size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-widest italic">Sort By:</span>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    {sortOptions.map(opt => (
                                        <button
                                            key={opt.val}
                                            onClick={() => setSortBy(opt.val)}
                                            className={`text-[10px] font-black uppercase tracking-widest italic px-4 py-2 border transition-all ${sortBy === opt.val ? 'bg-[#0f1923] text-white border-[#0f1923]' : 'bg-white text-slate-500 border-slate-100 hover:border-brand-200'}`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setShowFilters(true)} className="lg:hidden p-2 text-brand-600 border border-brand-200 shrink-0 ml-auto">
                                    <SlidersHorizontal size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Active Filter Tags */}
                        {hasFilters && (
                            <div className="flex flex-wrap gap-2 mb-8 items-center bg-slate-50 p-4 border border-slate-100">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mr-2">Active Config:</p>
                                {selectedCats.map(cat => (
                                    <span key={cat} className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-[#0f1923] text-[10px] font-black uppercase italic italic">
                                        {categories.find(c => c.slug === cat)?.name}
                                        <button onClick={() => toggleCat(cat)} className="text-slate-300 hover:text-brand-600 transition-colors"><X size={10} /></button>
                                    </span>
                                ))}
                                {priceRange && (
                                    <span className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-[#0f1923] text-[10px] font-black uppercase italic">
                                        {priceRange.label.split('(')[0]}
                                        <button onClick={() => setPriceRange(null)} className="text-slate-300 hover:text-brand-600 transition-colors"><X size={10} /></button>
                                    </span>
                                )}
                                <button onClick={clearAll} className="text-[10px] font-black text-brand-600 uppercase italic ml-auto border-b border-brand-200">Reset Dashboard</button>
                            </div>
                        )}

                        {/* Products Grid */}
                        {filtered.length === 0 ? (
                            <div className="bg-slate-50 p-24 text-center border border-dashed border-slate-200">
                                <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6">
                                    <Search size={24} className="text-slate-300" />
                                </div>
                                <h3 className="text-xl font-black text-[#0f1923] uppercase italic mb-2 tracking-tight">Zero Matches in Catalogue</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest max-w-xs mx-auto mb-8">No authorized equipment found matching your current sourcing profile.</p>
                                <button onClick={clearAll} className="bg-brand-600 text-white px-10 py-4 font-black text-[10px] uppercase tracking-[0.3em] italic shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all">Expand Sourcing Profile</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map((p) => (
                                    <ProductCard key={p.id} product={p} hideBadge={true} />
                                ))}
                            </div>
                        )}
                        
                        {/* Footer Help */}
                        <div className="mt-20 border-t border-slate-100 pt-12 text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center gap-8 justify-between p-10 bg-slate-50 border border-slate-100 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-[#0f1923] uppercase italic mb-2 tracking-tight">Need Large Project Fulfillment?</h4>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Connect with our specialized procurement desk for non-listed inventory.</p>
                                </div>
                                <Link href="/contact" className="relative z-10 bg-[#0f1923] text-white px-10 py-5 font-black text-[10px] uppercase tracking-[0.3em] italic hover:bg-brand-600 transition-all shadow-xl">
                                    Speak with Desk
                                </Link>
                                <Building2 size={120} className="absolute -right-4 -bottom-4 text-slate-100 group-hover:text-brand-50 transition-colors" />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Mobile Filter Overlay */}
            {showFilters && (
                <div className="fixed inset-0 z-[100] bg-white flex flex-col font-outfit">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#0f1923] text-white">
                        <div className="flex items-center gap-2">
                            <Filter size={20} className="text-brand-500" />
                            <h2 className="font-black uppercase italic text-lg tracking-tight">Sourcing Filters</h2>
                        </div>
                        <button onClick={() => setShowFilters(false)} className="p-2 border border-slate-700 text-slate-400 hover:text-white"><X size={24} /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-8 space-y-12 pb-32">
                        {/* Categories */}
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Catalogue Category</p>
                            <div className="grid grid-cols-1 gap-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => toggleCat(cat.slug)}
                                        className={`flex items-center justify-between p-5 border-2 transition-all ${selectedCats.includes(cat.slug) ? 'bg-slate-50 border-brand-500 text-brand-600' : 'border-slate-50 text-slate-500'}`}
                                    >
                                        <span className="text-xs font-black uppercase italic tracking-tight">{cat.name}</span>
                                        {selectedCats.includes(cat.slug) && <CheckCircle2 size={16} />}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Project Scale */}
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Project Scale</p>
                            <div className="space-y-4">
                                {priceRanges.map(r => (
                                    <label key={r.label} className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100">
                                        <span className="text-xs font-black uppercase italic text-[#0f1923] tracking-tighter">{r.label}</span>
                                        <input type="radio" name="mob-price" checked={JSON.stringify(priceRange) === JSON.stringify(r)} onChange={() => setPriceRange(r)} className="w-5 h-5 accent-brand-600" />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-6 bg-white border-t border-slate-100">
                        <button onClick={() => setShowFilters(false)} className="w-full bg-[#0f1923] text-white py-5 font-black uppercase italic tracking-widest text-xs shadow-2xl">
                            Apply Config (View {filtered.length} Items)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
