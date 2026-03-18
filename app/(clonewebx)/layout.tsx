import { ReactNode } from 'react';

export default function CloneWebXLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-surface">
            {children}
        </div>
    );
}
