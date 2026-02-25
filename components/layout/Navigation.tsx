import Link from 'next/link';
import { INavigationProps } from '@/types/layout/Navigation';

export const Navigation = ({ links, logo }: INavigationProps) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50">
            <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#344E41] rounded-full flex items-center justify-center text-white font-serif text-md shadow-sm">
                        L
                    </div>
                    <span className="font-playfair text-md md:text-lg tracking-tight text-[#344E41]">{logo}</span>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-inter text-slate-700 hover:text-[#344E41] transition-all duration-300 font-medium"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu icon */}
                <button className="md:hidden text-[#344E41] p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};
