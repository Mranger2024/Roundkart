import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import { ReactNode } from 'react';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
    title: 'RoundKart – Home Appliances & Kitchen Equipment | Retail & Bulk Supply',
    description: 'RoundKart is an authorised dealer of ISI and BEE certified home appliances including pressure cookers, ceiling fans, mixer grinders, and water heaters. Serving retail consumers and institutional buyers across India.',
    keywords: 'home appliances India, pressure cooker, ceiling fan, mixer grinder, water heater, bulk appliances supply, institutional procurement, RoundKart',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body className="font-inter bg-surface antialiased">
                <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
                {children}
            </body>
        </html>
    );
}
