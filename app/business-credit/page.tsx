'use client';
import Link from 'next/link';
import { 
    Building2, 
    CheckCircle2, 
    ShieldCheck, 
    Zap, 
    ArrowRight, 
    FileText, 
    Scale, 
    Wallet,
    HelpCircle
} from 'lucide-react';

export default function BusinessCreditPage() {
    return (
        <div className="bg-white min-h-screen font-outfit">
            {/* ── Institutional Hero ──────────────────────────── */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-[#0f1923] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-400 px-4 py-2 rounded-sm mb-6">
                            Institutional Liquidity Solutions
                        </div>
                        <h1 className="text-3xl md:text-7xl font-black text-white leading-[1.1] md:leading-none tracking-tight md:tracking-tighter mb-8 italic uppercase break-words">
                            Empowering <br />
                            <span className="text-brand-500 not-italic">Enterprise</span> <br />
                            Sourcing
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                            Scale your procurement without liquidity bottlenecks. Transition from cash billing to 45-day credit lines with RoundKart.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-500/20 flex items-center gap-3">
                                Start Verification <ArrowRight size={16} />
                            </Link>
                            <Link href="#model" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 font-black text-xs uppercase tracking-widest transition-all italic">
                                How it Works
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-600/10 to-transparent" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px]" />
            </section>

            {/* ── Trust Metrics ──────────────────────────────── */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Active Partners', value: '450+' },
                            { label: 'Credit Disbursed', value: '₹12Cr+' },
                            { label: 'Approval Rate', value: '94%' },
                            { label: 'Cycle Range', value: '15-45 Days' }
                        ].map((metric, i) => (
                            <div key={i} className="text-center md:text-left">
                                <p className="text-2xl md:text-4xl font-black text-[#0f1923] mb-1">{metric.value}</p>
                                <p className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Journey Model ─────────────────────────────── */}
            <section id="model" className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <p className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] mb-4">The Sourcing Journey</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#0f1923] tracking-tight uppercase italic underline decoration-brand-500 underline-offset-8">
                            Trust Built over <span className="not-italic text-brand-600">Transactions</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-slate-200 -z-10" />

                        {[
                            {
                                icon: <Zap size={24} />,
                                title: "1. Verified Sourcing",
                                subtitle: "0 - 45 Days",
                                desc: "Initial relationship phase. Build your institutional profile with 3 successful cash-based transactions of any volume."
                            },
                            {
                                icon: <Scale size={24} />,
                                title: "2. Limit Evaluation",
                                subtitle: "7 Day Review",
                                desc: "Our analysts review your corporate GST profile and procurement history to assign your baseline credit limit (₹5L - ₹50L)."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "3. Active Credit Line",
                                subtitle: "Seamless Sourcing",
                                desc: "Unlock 15-45 day credit cycles. Simply select 'Institutional Credit' at checkout for your subsequent orders."
                            }
                        ].map((step, i) => (
                            <div key={i} className="bg-white p-8 border border-slate-100 hover:border-brand-200 transition-all hover:shadow-xl group">
                                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-brand-600 mb-8 font-black group-hover:bg-brand-600 group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-black text-[#0f1923] mb-2 uppercase tracking-tight italic">{step.title}</h3>
                                <p className="text-[11px] font-bold text-brand-600 mb-4 uppercase tracking-[0.2em]">{step.subtitle}</p>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── B2B Advantages ───────────────────────────── */}
            <section className="py-20 bg-[#0f1923] text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic tracking-tighter">
                                Why verified <span className="text-brand-500 not-italic underline underline-offset-4">Partners</span> win
                            </h2>
                            <div className="space-y-10">
                                {[
                                    {
                                        title: "GST Compliance & ITC",
                                        desc: "Full B2B tax transparency. Claim up to 18% Input Tax Credit on every institutional order."
                                    },
                                    {
                                        title: "Volume Weighted Pricing",
                                        desc: "Exclusive institutional rates that decrease as your annual procurement volume increases."
                                    },
                                    {
                                        title: "Liquidity Preservation",
                                        desc: "Keep your capital working. Cycle stock through your projects and settle later via credit."
                                    }
                                ].map((adv, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 mt-1"><CheckCircle2 size={24} className="text-brand-500" /></div>
                                        <div>
                                            <h4 className="text-lg font-black uppercase tracking-tight mb-2 italic">{adv.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{adv.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-10 md:p-16 relative">
                            <div className="absolute -top-6 -left-6 bg-brand-600 text-white px-6 py-3 font-black text-[10px] uppercase tracking-widest italic">
                                Institutional Advantage
                            </div>
                            <h3 className="text-2xl font-black mb-8 uppercase italic">Institutional Dashboard</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 border border-white/10 flex justify-between items-center">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase">Available Credit</span>
                                    <span className="text-xl font-black text-brand-500 italic">₹12,45,000</span>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 flex justify-between items-center">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase">GST Sourcing Points</span>
                                    <span className="text-xl font-black text-brand-500 italic">4,500</span>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 text-center">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                                    <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Verified Multi-Unit Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Documentation FAQ ────────────────────────── */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <HelpCircle size={40} className="mx-auto text-brand-600 mb-6" />
                        <h2 className="text-3xl md:text-4xl font-black text-[#0f1923] uppercase italic">Application <span className="text-brand-600 not-italic whitespace-nowrap">Checklist</span></h2>
                    </div>

                    <div className="bg-white p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
                        <h3 className="text-lg font-black text-[#0f1923] mb-8 uppercase tracking-wide border-b border-slate-100 pb-4">Essential Documentation</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                "Valid GST Registration Certificate",
                                "Last 6 Months Bank Statement",
                                "Entity Constitution (Partnership/LLP/Pvt Ltd)",
                                "PAN Cards of Authorized Signatories",
                                "Project/RERA Details (For Developers)",
                                "Trade License / Business Proof"
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600 uppercase tracking-tight">
                                    <FileText size={18} className="text-brand-500" /> {doc}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How long does verification take?",
                                a: "Once documentation is submitted via the hub, baseline verification takes 3-5 business days. Once approved, the cash-to-credit journey begins immediately."
                            },
                            {
                                q: "What is the maximum credit limit?",
                                a: "Limits are dynamic and scale with your procurement volume. Standard limits range from ₹5L to ₹50L, with custom enterprise lines up to ₹5Cr for large-scale developers."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 border border-slate-200">
                                <h4 className="font-black text-sm text-[#0f1923] mb-2 uppercase italic">{faq.q}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ───────────────────────────────── */}
            <section className="py-20 md:py-32 relative overflow-hidden bg-brand-600">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 uppercase italic">
                        Ready to scale your <span className="not-italic opacity-50 underline decoration-white">Supply?</span>
                    </h2>
                    <p className="text-brand-100 text-lg md:text-xl font-bold mb-12 uppercase tracking-wide">
                        Connect with an account manager for a custom institutional quote.
                    </p>
                    <Link href="/contact" className="inline-flex bg-white text-brand-600 px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl">
                        Schedule Institutional Review
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </section>
        </div>
    );
}
