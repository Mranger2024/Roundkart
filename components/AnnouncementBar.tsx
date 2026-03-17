'use client';
import { useState, useEffect, JSX } from 'react';
import { Truck, Shield, Award } from 'lucide-react';

interface AnnouncementMessage {
    icon: JSX.Element | null;
    text: string;
}

const messages: AnnouncementMessage[] = [
    { icon: <Truck size={12} />, text: 'Free Shipping on orders above ₹999' },
    { icon: <Shield size={12} />, text: '5-Year Warranty on selected products' },
    { icon: <Award size={12} />, text: '50,000+ Happy Customers Across India' },
    { icon: null, text: 'No-Cost EMI Available on orders above ₹5,000' },
];

export default function AnnouncementBar() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="bg-gradient-to-r from-brand-900 via-brand-700 to-brand-900 text-white text-xs py-2 text-center font-medium tracking-wide">
            <p className="transition-all duration-500">{messages[idx].text}</p>
        </div>
    );
}
