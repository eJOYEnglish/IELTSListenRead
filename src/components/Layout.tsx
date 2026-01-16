import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-primary">iLearn</h1>
                </div>
            </header>

            <main className="flex-grow w-full max-w-3xl mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-white border-t py-6 mt-auto">
                <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} iLearn Strategy. Bảo lưu mọi quyền.
                </div>
            </footer>
        </div>
    );
};
