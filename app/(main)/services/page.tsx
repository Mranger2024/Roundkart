'use client';
import Link from 'next/link';
import { 
    Truck, 
    ShieldCheck, 
    Zap, 
    ArrowRight, 
    Building2, 
    Users, 
    Settings, 
    BarChart3,
    Clock,
    Headset
} from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Institutional Sourcing",
            desc: "Customized procurement for large-scale projects. Hotels, hospitals, and developers benefit from our direct manufacturer relationships.",
            features: ["Direct Factory Pricing", "GST-Compliant Billing", "Volume Weightage"]
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Project Logistics",
            desc: "Synchronized delivery schedules tailored to your project milestones. We handle the heavy lifting and last-mile complexity.",
            features: ["Milestone Delivery", "Zero-Defect Transit", "Site-Ready Setup"]
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Technical Consulting",
            desc: "Our engineers help you select the most efficient appliances to meet your energy ratings and space constraints.",
            features: ["Energy Audits", "BIM-Ready Specs", "Brand Comparison"]
        },
        {
            icon: <Headset className="w-8 h-8" />,
            title: "Enterprise After-Sales",
            desc: "Priority service level agreements (SLAs) for institutional partners. Dedicated technical support to minimize downtime.",
            features: ["48-Hour SLA", "Direct AMC Links", "On-Site Training"]
        }
    ];

    return (
        <div className="bg-white min-h-screen font-outfit">
            {/* ── Services Hero ─────────────────────────────── */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-[#0f1923] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-400 px-4 py-2 rounded-sm mb-6">
                            Verified Ecosystem
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 uppercase italic">
                            Institutional <br />
                            <span className="text-brand-500 not-italic">Support</span> <br />
                            Infrastructure
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-2xl">
                            RoundKart provides more than just hardware. We provide the technical and logistics infrastructure to power large-scale enterprise projects.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-600/5 to-transparent" />
            </section>

            {/* ── Core Services Grid ─────────────────────────── */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-200 hover:border-brand-300 transition-all group shadow-sm hover:shadow-xl">
                                <div className="text-brand-600 mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                                <h3 className="text-2xl font-black text-[#0f1923] mb-4 uppercase italic tracking-tight">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                                    {service.desc}
                                </p>
                                <div className="space-y-3 mb-10">
                                    {service.features.map((feat) => (
                                        <div key={feat} className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
                                            <div className="w-1 h-1 bg-brand-600 shrink-0" /> {feat}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-600 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-4 transition-all">
                                    Enquire About This <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Institutional Strategy ──────────────────── */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-600 mb-4">Enterprise Reliability</p>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0f1923] mb-8 uppercase italic italic tracking-tighter">
                                Optimized for <span className="text-brand-600 not-italic">Bulk Dynamics</span>
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed mb-10 font-medium">
                                We understand the complexities of multi-unit procurement. Our services are designed to remove friction from the supply chain, ensuring that project managers can focus on building while we handle the sourcing.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { icon: <BarChart3 className="text-brand-600" />, label: 'Cost Audits', val: 'Save up to 22%' },
                                    { icon: <Clock className="text-brand-600" />, label: 'Lead Time', val: 'JV-Direct Shipping' },
                                    { icon: <ShieldCheck className="text-brand-600" />, label: 'Warranty', val: 'Direct AMC Setup' },
                                    { icon: <Zap className="text-brand-600" />, label: 'Fulfillment', val: 'PAN India Network' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="mb-2">{item.icon}</div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-black text-[#0f1923] italic uppercase">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-[#0f1923] p-10 md:p-16 text-white relative z-10 hover:shadow-2xl transition-all">
                                <h3 className="text-2xl font-black mb-8 uppercase italic border-b border-white/10 pb-4">Dedicated Support</h3>
                                <div className="space-y-6">
                                    <p className="text-slate-400 text-sm leading-relaxed italic">"RoundKart's logistics team managed the delivery of 400 air conditioners across 5 different project sites simultaneously."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center font-black">SJ</div>
                                        <div>
                                            <p className="text-xs font-black uppercase italic">Siddharth Jain</p>
                                            <p className="text-[10px] text-brand-500 font-bold uppercase tracking-widest">Procurement Head, Hyatt India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#0f1923]/10 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Sourcing Hub ────────────────────────────── */}
            <section className="py-20 md:py-32 bg-brand-600 text-white text-center italic relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 uppercase tracking-tighter">
                        Power your <span className="text-white/50 not-italic">Large-Scale</span> projects
                    </h2>
                    <p className="text-brand-100 text-lg md:text-xl font-bold mb-12 uppercase tracking-[0.2em] not-italic">
                        Expert consultation for institutional buyers.
                    </p>
                    <Link href="/contact" className="inline-flex bg-[#0f1923] text-white px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-2xl not-italic">
                        Schedule Consultation
                    </Link>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 -mr-20 -mt-20 rounded-full blur-3xl" />
            </section>
        </div>
    );
}
