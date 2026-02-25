'use client';

import Link from 'next/link';
import { IFooterData } from '@/types/layout/Footer';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = ({ about, quickLinks, services, connect, bottom }: IFooterData) => {
    const renderIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'facebook': return <Facebook size={20} />;
            case 'instagram': return <Instagram size={20} />;
            case 'twitter': return <Twitter size={20} />;
            case 'mail': return <Mail size={20} />;
            default: return null;
        }
    };

    return (
        <footer className="bg-[#344E41] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-playfair font-medium">{about.title}</h3>
                        <p className="text-white/70 font-inter text-sm leading-relaxed max-w-xs">
                            {about.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-playfair font-medium">{quickLinks.title}</h3>
                        <ul className="space-y-3">
                            {quickLinks.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm font-inter"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-playfair font-medium">{services.title}</h3>
                        <ul className="space-y-3">
                            {services.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm font-inter"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-playfair font-medium">{connect.title}</h3>
                        <div className="flex gap-4">
                            {connect.social.map((item) => (
                                <Link
                                    key={item.platform}
                                    href={item.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                                    aria-label={item.platform}
                                >
                                    {renderIcon(item.iconName)}
                                </Link>
                            ))}
                        </div>
                        <p className="text-white/70 font-inter text-sm leading-relaxed">
                            {connect.description}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/50 text-sm font-inter">
                        {bottom.copyright}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-8">
                        {bottom.links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-white/50 hover:text-white transition-colors text-sm font-inter"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
