import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function HeaderClonePage() {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col">
            
            {/* The single wrapper Elementor user should select */}
            <div id="elementor-export-target" className="w-full flex flex-col bg-white">
                <AnnouncementBar />
                <Navbar />
            </div>
            
            {/* Dummy Scroll Area (For testing scrolling/sticky effects only) */}
            <div className="flex-1 flex items-start justify-center pt-24 border-t-2 border-dashed border-gray-200 mt-24">
                <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 max-w-lg">
                    <p className="text-xl font-black text-gray-400 uppercase tracking-wider">Dummy Scroll Area</p>
                    <p className="text-sm text-gray-500 font-medium">Scroll down to see the sticky header in action.</p>
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded text-xs text-orange-800 text-left">
                        <strong>⚠️ CloneWebX Tip:</strong> Above is a combined wrapper containing the Announcement Bar, Top Strip, and Main Nav. Select the <strong>entire block</strong> (hover over the edges) to copy the complete header layout.
                    </div>
                </div>
            </div>
        </div>
    );
}
