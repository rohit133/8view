'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: IModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-sage/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-2xl font-playfair text-sage">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-sage transition-colors rounded-full hover:bg-gray-50"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
