'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
    'Castrol',
    'Shell',
    'ADNOC',
    'Total',
    'Zic',
    'Dufe',
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-24 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="JESR AL MANAMAH"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </Link>

                {/* Centered Navigation */}
                <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-black/80">
                        Home
                    </Link>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-black/80">
                            Shop by Category <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="absolute top-full left-0 w-48 bg-white border shadow-md rounded-md mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                            <div className="py-2">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/shop?category=${encodeURIComponent(cat)}`}
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                                <Link href="/shop" className="block px-4 py-2 text-sm font-bold border-t mt-1 hover:bg-gray-100">Browse All</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/about" className="text-sm font-medium transition-colors hover:text-black/80">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-black/80">
                        Contact
                    </Link>
                </nav>

                {/* Call Button */}
                <div className="flex items-center gap-4">
                    <a href="tel:+97165568682">
                        <Button variant="default" className="bg-[var(--color-brand-red)] hover:bg-red-700 hidden md:flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call Now
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
