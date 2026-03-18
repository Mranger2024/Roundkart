import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
