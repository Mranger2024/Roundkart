'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { 
    MapPin, 
    Phone, 
    Mail, 
    MessageCircle, 
    Clock, 
    CheckCircle, 
    ChevronRight, 
    Building2,
    Send,
    ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

interface ContactForm {
    name: string;
    company: string;
    gstin: string;
    email: string;
    phone: string;
    category: string;
    message: string;
}

export default function ContactPage() {
    const [form, setForm] = useState<ContactForm>({ 
        name: '', 
        company: '',
        gstin: '',
        email: '', 
        phone: '', 
        category: '', 
        message: '' 
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white min-h-screen font-outfit">

            {/* ── Institutional Hero ──────────────────────────── */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-[#0f1923] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-400 px-4 py-2 rounded-sm mb-6">
                        Institutional Contact Hub
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 italic uppercase">
                        Scale your <br />
                        <span className="text-brand-500 not-italic">Connection</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
                        Connect with our dedicated enterprise desk for high-volume procurement, project consulting, and credit evaluations.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20 pb-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* ── Contact Info Cards ────────────────────────── */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 border border-slate-200 shadow-xl">
                            <h3 className="text-lg font-black text-[#0f1923] mb-8 uppercase italic border-b border-slate-100 pb-4">Regional HQ</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hyderabad</p>
                                        <p className="text-sm font-bold text-[#0f1923] leading-relaxed italic">
                                            15-1-491 Ratan Complex, Feelkhana<br />Begumbazaar, Telangana — 500012
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Enterprise Desk</p>
                                        <p className="text-sm font-bold text-[#0f1923] italic">institutional@roundkart.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Institutional Line</p>
                                        <p className="text-sm font-bold text-[#0f1923] italic">+91 86888 64699</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/918688864699" target="_blank" rel="noreferrer" className="block bg-[#25D366] text-white p-6 hover:opacity-95 transition-opacity shadow-lg">
                            <div className="flex items-center gap-4">
                                <MessageCircle size={32} />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Priority Support</p>
                                    <p className="text-lg font-black uppercase italic tracking-tight">WhatsApp Enterprise</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* ── Inquiry Form ─────────────────────────────── */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-slate-200 shadow-2xl p-8 md:p-12">
                            {submitted ? (
                                <div className="py-20 text-center flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 bg-brand-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-brand-500/20">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 className="text-3xl font-black text-[#0f1923] mb-4 uppercase italic">Inquiry Received</h2>
                                    <p className="text-slate-500 max-w-sm mb-10 font-medium">Our institutional account managers will contact you within 4 business hours to discuss your requirements.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-brand-600 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-brand-200 hover:border-brand-600 transition-all pb-1">Send New Inquiry</button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-black text-[#0f1923] mb-2 uppercase italic tracking-tight">Institutional Inquiry</h3>
                                        <p className="text-slate-500 text-sm font-medium italic">Complete the verified partner profile for priority processing.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name *</label>
                                                <input required name="name" value={form.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors" placeholder="e.g. Rahul Sharma" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number *</label>
                                                <input required name="phone" value={form.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors" placeholder="+91 XXXX XXX XXX" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Name *</label>
                                                <input required name="company" value={form.company} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors" placeholder="Entity Name / Institution" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GSTIN (Optional)</label>
                                                <input name="gstin" value={form.gstin} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors uppercase" placeholder="36AAAAA0000A1Z5" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address *</label>
                                                <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors" placeholder="rahul@enterprise.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</label>
                                                <select name="category" value={form.category} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors">
                                                    <option value="">Select Procurement Mode</option>
                                                    <option>Bulk Order (Retail Stocking)</option>
                                                    <option>Institutional (Hospital/Hotel)</option>
                                                    <option>Real Estate / Developers</option>
                                                    <option>Credit Line Application</option>
                                                    <option>Technical Consultation</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inquiry Details *</label>
                                            <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-bold outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Detail your project requirements or bulk volume..." />
                                        </div>

                                        <div className="pt-4">
                                            <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-12 py-5 font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl shadow-brand-500/20 flex items-center gap-4 w-full md:w-auto">
                                                Submit Inquiry <Send size={16} />
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Assurance Banner ────────────────────────────── */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: <ShieldCheck className="text-brand-600" />, title: "Authorized Dealers", desc: "Every product sourced directly from brand-authorized distribution hubs." },
                            { icon: <Building2 className="text-brand-600" />, title: "GST Visibility", desc: "Instant tax-compliant invoices for B2B input tax credit optimization." },
                            { icon: <Clock className="text-brand-600" />, title: "Priority Support", desc: "Institutional partners get 4-hour response SLAs on business days." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="text-sm font-black uppercase italic text-[#0f1923] mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
