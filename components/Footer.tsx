'use client';
import Link from 'next/link';
import { Shield, BadgeCheck, Facebook, Instagram, Youtube, Twitter, LucideIcon } from 'lucide-react';

interface LinkGroup {
    id: string;
    title: string;
    links: { label: string; href: string }[];
}

export default function Footer() {
    const linkGroups: LinkGroup[] = [
        {
            id: 'menu',
            title: 'Page Menu',
            links: [
                { label: 'Home', href: '/' },
                { label: 'Shop All', href: '/shop' },
                { label: 'About RoundKart', href: '/about' },
                { label: 'Track Order', href: '/track' },
                { label: 'Support Desk', href: '/support' },
                { label: 'Bulk Enquiry', href: '/contact' }
            ]
        },
        {
            id: 'legal',
            title: 'Legal Hub',
            links: [
                { label: 'Terms of Service', href: '#' },
                { label: 'Privacy Protocol', href: '#' },
                { label: 'Return Policy', href: '#' },
                { label: 'Warranty Terms', href: '#' },
                { label: 'EPR Compliance', href: '#' }
            ]
        },
    ];

    const socialIcons: LucideIcon[] = [Facebook, Instagram, Youtube, Twitter];

    return (
        <footer className="bg-[#0f1111] text-[#9cb4c8]">
            {/* ── MAIN CONTENT ────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">

                    {/* Branding Section */}
                    <div className="col-span-2 lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-2xl font-black text-[#0f1111] text-xl">R</div>
                                <span className="font-outfit font-black text-2xl text-white tracking-tighter uppercase whitespace-nowrap">Round<span className="text-brand-500">Kart</span></span>
                            </div>
                            <p className="text-[13px] leading-relaxed max-w-sm mb-6 md:mb-8 font-medium italic opacity-80">
                                India&apos;s premium gateway for authorized home technology and industrial kitchen systems. Facilitating high-performance procurement for institutional and retail clients.
                            </p>
                            <div className="flex gap-4">
                                {socialIcons.map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/5 bg-white/5 hover:bg-brand-500 hover:text-white transition-all text-white/40">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Nav Groups */}
                    {linkGroups.map((group) => (
                        <div key={group.id} className="col-span-1 lg:col-span-1">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 md:mb-8 leading-none">{group.title}</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {group.links.map(l => (
                                    <li key={l.label}>
                                        <Link href={l.href} className="text-[12px] font-bold hover:text-brand-400 hover:translate-x-1 transition-all inline-block">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact/Office Section */}
                    <div className="col-span-2 lg:col-span-2">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 md:mb-8 leading-none">Institutional HQ</h4>
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
                                <div className="space-y-2 flex-1">
                                    <p className="text-[13px] md:text-[12px] leading-relaxed font-bold text-white/90">
                                        RoundKart (Ratan Complex)<br />
                                        Feelkhana Begumbazaar,<br />
                                        Hyderabad, TS 500012, India
                                    </p>
                                    <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">CIN ID</span>
                                            <span className="text-[10px] font-black text-white/70">U52100TG2022PTC160543</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">GST Validation</span>
                                            <span className="text-[10px] font-black text-brand-500">36AAGCN9543M1Z6</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 h-40 sm:h-auto min-h-[140px] rounded-lg overflow-hidden border border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500 shadow-2xl">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.576822453896!2d78.4716!3d17.3735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e7a7e7b%3A0x7a7e7b6e7a7e7b!2sFeelkhana%2C%20Begum%20Bazaar%2C%20Hyderabad%2C%20Telangana%20500012!5e0!3m2!1sen!2sin!4v1710515000000!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── FINAL LEGAL BAR ──────────────────────────────────── */}
            <div className="border-t border-white/5 py-8 bg-black/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">© 2026 ROUNDKART INTERACTIVE. ALL RIGHTS RESERVED.</p>
                        <div className="flex items-center gap-2 bg-brand-500 whitespace-nowrap px-3 py-1 rounded-sm shadow-xl">
                            <BadgeCheck size={12} className="text-white" />
                            <span className="text-[9px] font-black text-white uppercase tracking-widest">Authorised Channel Partner</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2 text-white/90">
                            <Shield size={14} className="text-brand-500" />
                            <span>PCI-DSS SECURE ACCESS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
