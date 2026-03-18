import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function HeaderClonePage() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            
            {/* Dummy Scroll Area (For testing scrolling/sticky effects only) */}
            <div className="h-[200vh] bg-neutral-50 flex items-start justify-center pt-24 border-t-2 border-dashed border-gray-200">
                <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 max-w-lg">
                    <p className="text-xl font-black text-gray-400 uppercase tracking-wider">Dummy Scroll Area</p>
                    <p className="text-sm text-gray-500 font-medium">Scroll down to see the sticky header in action.</p>
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded text-xs text-orange-800 text-left">
                        <strong>⚠️ CloneWebX Tip:</strong> Do not select this dummy area when cloning. Only select the <code>&lt;header&gt;</code> element and announcement bar above it to export to Elementor.
                    </div>
                </div>
            </div>
        </>
    );
}
