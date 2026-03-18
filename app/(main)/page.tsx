import Link from 'next/link';
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    ShieldCheck,
    Truck,
    Headset,
    Users,
    PackageCheck,
    Star,
    Check,
    ArrowUpRight,
    LucideIcon,
} from 'lucide-react';
import { categories, brands } from '@/data/categories';

/* ─── Types ───────────────────────────────────────────────────────────────── */

interface Stat {
    value: string;
    label: string;
}

interface Pillar {
    icon: LucideIcon;
    title: string;
    body: string;
}

interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    company: string;
}

/* ─── Static data ──────────────────────────────────────────────────────────── */

const stats: Stat[] = [
    { value: '50,000+', label: 'Registered Customers' },
    { value: '19,000+', label: 'Pincodes Covered' },
    { value: '5-Year', label: 'Max Warranty' },
    { value: '24/7', label: 'Service Support' },
];

const pillars: Pillar[] = [
    {
        icon: BadgeCheck,
        title: 'Certified Products',
        body: 'ISI & BEE certified for safety and high energy efficiency.',
    },
    {
        icon: ShieldCheck,
        title: 'Authorised Dealer',
        body: 'Exclusively sourcing via official brand-authorised channels.',
    },
    {
        icon: PackageCheck,
        title: 'Bulk Pricing',
        body: 'Dedicated pricing tiers for institutional and volume procurement.',
    },
    {
        icon: Truck,
        title: 'Rapid Logistics',
        body: 'Last-mile delivery to 19k+ codes with doorstep installation.',
    },
    {
        icon: Headset,
        title: 'Lifetime Support',
        body: 'Authorized service network for maintenance and genuine parts.',
    },
];

const testimonials: Testimonial[] = [
    {
        quote: 'RoundKart supplied 120 pressure cookers for our hotel chain. Documentation, delivery, and after-sales were all handled without any follow-up required.',
        name: 'Rajesh Nair',
        designation: 'Purchase Manager',
        company: 'Horizon Hospitality Group',
    },
    {
        quote: 'We replaced our hospital canteen equipment through RoundKart. The bulk pricing was competitive and all products arrived with certification.',
        name: 'Dr. Priya Venkatesh',
        designation: 'Admin Director',
        company: 'Lifeline Medical Centre',
    },
    {
        quote: 'The BLDC ceiling fans we ordered arrived on schedule and every unit was genuine. No complaints from residents, no returns.',
        name: 'Amit Desai',
        designation: 'Project Director',
        company: 'Cornerstone Builders',
    },
];

interface Partner {
    name: string;
    color: string;
}

const partners: Partner[] = [
    { name: 'BlueDart', color: 'text-blue-600' },
    { name: 'Ecom Express', color: 'text-orange-500' },
    { name: 'Delhivery', color: 'text-gray-900' },
    { name: 'Razorpay', color: 'text-blue-500' },
    { name: 'Visa', color: 'text-blue-800' },
    { name: 'Mastercard', color: 'text-red-500' },
    { name: 'UPI', color: 'text-green-600' },
];


/* ─── Component ────────────────────────────────────────────────────────────── */

export default function HomePage() {
    return (
        <div className="bg-white">

            {/* ── 1. Hero & Stats Integrated ────────────────────────────────── */}
            <section className="bg-[#0f1923] text-white overflow-hidden relative border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20 md:pt-28 md:pb-36 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left: Copy */}
                    <div className="relative z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400 px-3 py-1.5 rounded-sm mb-4 md:mb-6">
                            Authorized Institutional Partner
                        </div>
                        <h1 className="font-outfit text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] tracking-tight text-white mb-4 md:mb-6">
                            Supply Chain Solutions{" "}
                            <br className="hidden md:block" />
                            for Modern Enterprise{" "}
                            <br className="hidden md:block" />
                            <span className="text-brand-500">Corporate Scale</span>
                        </h1>
                        <p className="text-[#9cb4c8] text-[13px] md:text-base leading-relaxed mb-6 md:mb-8 max-w-md mx-auto md:mx-0 opacity-80">
                            The preferred procurement gateway for hotels, hospitals, and developers. Bulk sourcing with GST advantages and verified manufacturer warranties.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] md:text-xs uppercase tracking-wider px-6 md:px-8 py-3.5 md:py-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-500/20"
                            >
                                Get Corporate Hub Access <ArrowRight size={14} />
                            </Link>
                            <Link
                                href="/shop"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold text-[11px] md:text-xs uppercase tracking-wider px-6 md:px-8 py-3.5 md:py-4 transition-all"
                            >
                                Explore Catalogue
                            </Link>
                        </div>
                    </div>

                    {/* Right: Category image active background */}
                    <div className="hidden md:grid grid-cols-2 gap-4 relative">
                        {categories.slice(0, 4).map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.slug}`}
                                className="group relative overflow-hidden aspect-[4/3] bg-gray-800 border border-white/5"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-transparent to-transparent opacity-60" />
                                <span className="absolute bottom-4 left-4 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                                    {cat.name}
                                </span>
                            </Link>
                        ))}
                        {/* Decorative background blur */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#2874f0]/10 blur-[100px] -z-10" />
                    </div>
                </div>

                {/* Integrated Compact Stats Bar - Fixed for mobile overflow */}
                <div className="md:absolute md:bottom-0 md:left-0 w-full bg-white/5 border-t border-white/10 backdrop-blur-sm relative py-8 md:py-0">
                    <div className="max-w-7xl mx-auto divide-x divide-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
                            {stats.map((stat, i) => (
                                <div key={i} className="py-2 md:py-5 px-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 text-center md:text-left">
                                    <p className="font-outfit text-2xl md:text-xl font-black text-white">{stat.value}</p>
                                    <p className="text-[9px] text-[#9cb4c8] font-bold uppercase tracking-[0.2em] leading-tight w-full md:w-20">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. Trusted Brands ─────────────────────────────────────────── */}
            <section className="py-12 md:py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Authorised Dealer For</p>
                        <h2 className="font-outfit text-2xl font-extrabold text-[#0f1923] tracking-tight">Trusted Brands</h2>
                        </div>
                    <div className="grid grid-cols-5 lg:grid-cols-10 gap-px bg-gray-200">
                            {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className="bg-white px-4 py-5 flex items-center justify-center hover:bg-[#f0f5ff] transition-colors cursor-default"
                            >
                                <span className="text-xs font-extrabold text-[#0f1923] uppercase tracking-wide text-center leading-tight">
                                    {brand.name}
                                </span>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. Who We Serve (B2B Priority) ───────────────────────────── */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-8 md:mb-12">
                        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-600 mb-3 leading-none">Institutional Sourcing</p>
                        <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#0f1923] tracking-tight">Supply Partners</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {/* B2B Card (Full Width on Mobile, 2/3 on Desktop) */}
                        <div className="lg:col-span-2 bg-brand-600 p-8 md:p-12 text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                            <div className="relative z-10">
                                <Building2 size={40} className="text-brand-300 mb-6" />
                                <h3 className="font-outfit text-3xl font-black mb-4 uppercase tracking-tighter">Institutional & Enterprise</h3>
                                <p className="text-brand-100 text-base leading-relaxed mb-8 max-w-xl">
                                    Strategic procurement for hotels, hospitals, and developers. Volume-based sourcing with full compliance, GST benefits, and dedicated account management.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                    {['Tax-Compliant Invoicing', 'Dedicated Account Managers', 'Priority Bulk Logistics', 'Custom Order Handling'].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-xs font-bold">
                                            <Check size={16} className="text-brand-300" /> {item}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-brand-600 px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-brand-50 transition-colors">
                                    Business Enquiry <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-20 -mt-20 rounded-full blur-3xl" />
                        </div>

                        {/* Retail Card */}
                        <div className="bg-gray-50 p-8 md:p-10 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-500 group">
                            <Users size={32} className="text-brand-600 mb-6" />
                            <h3 className="font-outfit text-2xl font-black text-[#0f1923] mb-4 uppercase tracking-tighter">Retail Buyers</h3>
                            <p className="text-gray-500 text-sm leading-6 mb-8">
                                Premium appliances for households with verified manufacturer warranty.
                            </p>
                            <Link href="/shop" className="inline-flex items-center gap-3 text-brand-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                Shop Personal <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. Business Credit (The Model) ──────────────────────────── */}
            <section className="py-12 md:py-24 bg-[#f0f5ff] overflow-hidden border-y border-brand-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-600 mb-3 leading-none">Credit Solutions</p>
                            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#0f1923] tracking-tighter mb-6">
                                Procurement Credit <br /> <span className="text-brand-600">Built on Trust</span>
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-lg">
                                We reward consistency. Our unique "Cash-to-Credit" model allows verified business partners to transition from prepayments to flexible credit lines based on their sourcing profile.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Stage 1: Verified Sourcing", desc: "Build your profile with 3-5 successful cash-based transactions." },
                                    { title: "Stage 2: Credit Evaluation", desc: "Our team reviews your institutional profile and procurement volume." },
                                    { title: "Stage 3: Active Credit Line", desc: "Access 15-45 day credit cycles for all subsequent bulk orders." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-10 h-10 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-600 font-black text-sm shadow-sm flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-[#0f1923] uppercase tracking-tight mb-1">{step.title}</h4>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="mt-12 inline-flex items-center gap-4 bg-[#0f1923] text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-brand-600 transition-colors shadow-2xl">
                                Request Credit Evaluation <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-8 md:p-12 shadow-card border-l-4 border-brand-600 relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center"><Check size={24} /></div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Reliability</p>
                                        <p className="text-lg font-bold text-gray-900 leading-none">98% Partner Trust Score</p>
                                    </div>
                                </div>
                                <div className="space-y-6 mb-10">
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="w-[85%] h-full bg-brand-500" />
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] font-black uppercase text-gray-500">
                                        <span>Initial Limit: ₹5,00,000</span>
                                        <span className="text-brand-600">Scaleable to ₹25L+</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 italic font-medium">"RoundKart's credit line enabled us to complete our 120-unit housing project without liquidity bottlenecks."</p>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-600/5 border border-brand-600/10 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. Product Categories ─────────────────────────────────────── */}
            <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
                        <div>
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2874f0] mb-3 leading-none">Discovery</p>
                            <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#0f1923] tracking-tight whitespace-nowrap">Industry Standards</h2>
                        </div>
                        <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-black text-[#2874f0] hover:underline underline-offset-8 uppercase tracking-widest">
                            Full Portfolio <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.slug}`}
                                className="group bg-white p-2 border border-gray-100 hover:border-[#2874f0] transition-all"
                            >
                                <div className="aspect-square bg-gray-50 mb-4 overflow-hidden">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="px-2 pb-4 text-center">
                                    <h3 className="font-outfit font-black text-[#0f1923] text-[11px] mb-1 uppercase tracking-tight">{cat.name}</h3>
                                    <p className="text-[9px] text-[#2874f0] font-bold uppercase tracking-[0.2em]">{cat.productCount} Items</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. Why Choose RoundKart (Compact & Premium) ────────────────── */}
            <section className="py-12 md:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:sticky lg:top-32">
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2874f0] mb-4">RoundKart Advantage</p>
                            <h2 className="font-outfit text-4xl font-black text-[#0f1923] tracking-tighter leading-none mb-6 italic uppercase">Beyond<br />Supply Chain</h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                We bridge the gap between global manufacturers and local institutional needs with certified reliability.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            {pillars.map((pillar, i) => {
                                const Icon = pillar.icon;
                                return (
                                    <div key={i} className="flex gap-6 p-6 bg-gray-50 border border-transparent hover:border-gray-200 transition-all rounded-sm">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm flex items-center justify-center">
                                            <Icon size={18} className="text-[#2874f0]" />
                                        </div>
                                        <div>
                                            <h3 className="font-outfit font-black text-[#0f1923] text-xs uppercase mb-2 tracking-tight">{pillar.title}</h3>
                                            <p className="text-[11px] text-gray-500 leading-normal font-medium">{pillar.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                 {/* ── 4. BRAND SCALE PARTNERS ─────────────────────────────── */}
            <div className="border-white/5 pt-10 opacity-30 grayscale">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-12">
                    {partners.map(p => (
                        <span key={p.name} className={`text-[14px] font-black italic tracking-tighter ${p.color}`}>{p.name}</span>
                    ))}
                </div>
            </div>
            </section>

            {/* ── 7. Testimonials ───────────────────────────────────────────── */}
            <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12 text-center md:text-left">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#2874f0] mb-2">Client Feedback</p>
                        <h2 className="font-outfit text-3xl font-extrabold text-[#0f1923] tracking-tight">What Our Customers Say</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white border border-gray-200 p-7 hover:border-[#2874f0] transition-colors shadow-sm">
                                <div className="flex gap-0.5 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={12} fill="#2874f0" className="text-[#2874f0]" />
                                        ))}
                                    </div>
                                <blockquote className="text-[13px] text-gray-600 leading-relaxed mb-6 italic">
                                        &ldquo;{t.quote}&rdquo;
                                    </blockquote>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-[#0f1923] text-sm">{t.name}</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5">{t.designation}</p>
                                    <p className="text-[11px] text-[#2874f0] font-bold mt-0.5">{t.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 8. B2B Enquiry CTA ────────────────────────────────────────── */}
            <section className="py-12 md:py-20 bg-[#0f1923] border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a9eda] mb-3">For Businesses & Institutions</p>
                            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                                Procuring for Your Business?
                            </h2>
                            <p className="text-[#9cb4c8] text-base leading-relaxed">
                                We work with procurement teams at hotels, hospitals, canteens, housing societies, and government bodies. Our institutional desk provides volume pricing, GST documentation, product specification sheets, and coordinated delivery schedules.
                        </p>
                    </div>
                        <div className="bg-white/5 border border-white/10 p-7">
                            <h3 className="font-outfit font-bold text-white text-base mb-5">Submit an Enquiry</h3>
                            <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                        placeholder="Your Name"
                                        className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm outline-none focus:border-[#4a9eda] transition-colors"
                            />
                            <input
                                type="text"
                                        placeholder="Organisation"
                                        className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm outline-none focus:border-[#4a9eda] transition-colors"
                            />
                        </div>
                        <input
                            type="email"
                                    placeholder="Business Email"
                                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm outline-none focus:border-[#4a9eda] transition-colors"
                        />
                                <input
                                    type="text"
                                    placeholder="Products Required & Approximate Quantity"
                                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm outline-none focus:border-[#4a9eda] transition-colors"
                                />
                                <button className="w-full bg-[#2874f0] hover:bg-[#1b5ed9] text-white font-bold text-sm py-3 transition-colors">
                                    Send Enquiry
                        </button>
                            </div>
                            <p className="text-[11px] text-white/30 mt-3">We respond to all business enquiries within one business day.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
