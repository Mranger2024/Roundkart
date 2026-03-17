import Link from 'next/link';
import { 
    Users, 
    Target, 
    ShieldCheck, 
    Globe, 
    Award, 
    Building2,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen font-outfit">
            
            {/* ── Institutional Hero ──────────────────────────── */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-[#0f1923] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-400 px-4 py-2 rounded-sm mb-6">
                            Authorized Institutional Partner
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 italic uppercase">
                            The Gateway <br />
                            to <span className="text-brand-500 not-italic">Enterprise</span> <br />
                            Sourcing
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-2xl">
                            RoundKart is India's premier supply chain facilitator for high-spec appliances, bridging the gap between global manufacturers and local institutional demand.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-600/5 to-transparent" />
            </section>

            {/* ── Impact Metrics ──────────────────────────────── */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Families Served', value: '50k+' },
                            { label: 'Brand Partners', value: '12+' },
                            { label: 'Authorized Hubs', value: '8' },
                            { label: 'SKUs Available', value: '5000+' }
                        ].map((metric, i) => (
                            <div key={i} className="text-center md:text-left">
                                <p className="text-2xl md:text-4xl font-black text-[#0f1923] mb-1">{metric.value}</p>
                                <p className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Heritage & Evolution ────────────────────────── */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <p className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em]">Our Evolution</p>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0f1923] tracking-tight uppercase italic underline decoration-brand-500 underline-offset-8">
                                From Retail to <span className="not-italic text-brand-600">Institutional</span> Power
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                Founded to revolutionize home appliance shopping, RoundKart has evolved into a strategic procurement partner for developers, hoteliers, and government institutions.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Direct Hub Model", desc: "Removing middle-men to provide factory-direct pricing to our enterprise clients." },
                                    { title: "Authorized Assurance", desc: "100% genuine products sourced strictly through brand-authorized channels." },
                                    { title: "Transparency First", desc: "Full GST compliance and digitized supply chain tracking for every institutional order." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><CheckCircle2 size={18} className="text-brand-600" /></div>
                                        <div>
                                            <h4 className="text-sm font-black uppercase italic text-[#0f1923]">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 flex items-center justify-center p-20 group outline outline-1 outline-slate-200 outline-offset-8">
                                <Building2 size={120} className="text-slate-300 group-hover:text-brand-500 transition-colors" />
                                <div className="absolute -top-4 -left-4 bg-[#0f1923] text-white p-8 font-black text-xs uppercase italic tracking-widest">
                                    Est. 2018
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-full h-full border border-brand-200 -z-10 bg-brand-50/30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Authorized Ecosystem ────────────────────────── */}
            <section className="py-20 md:py-32 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
                    <p className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] mb-4">The Compliance Network</p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0f1923] uppercase italic">
                        Authorized <span className="text-brand-600 not-italic">Brand</span> Partners
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['PRESTIGE', 'PHILIPS', 'BAJAJ', 'HAWKINS', 'CROMPTON', 'V-GUARD', 'GLEN', 'EON'].map(brand => (
                            <div key={brand} className="bg-white border border-slate-200 p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:border-brand-300 hover:shadow-xl group">
                                <span className="font-black text-xl text-slate-300 group-hover:text-[#0f1923] italic tracking-tighter">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ───────────────────────────────── */}
            <section className="py-20 md:py-32 relative overflow-hidden bg-brand-600">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 uppercase italic">
                        Ready to <span className="not-italic opacity-50 underline decoration-white">Collaborate?</span>
                    </h2>
                    <p className="text-brand-100 text-lg md:text-xl font-bold mb-12 uppercase tracking-wide max-w-xl mx-auto">
                        Connect with our institutional desk to explore custom procurement packages.
                    </p>
                    <Link href="/contact" className="inline-flex bg-white text-brand-600 px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl">
                        Become a Partner
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </section>

        </div>
    );
}
