'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
    'Batteries',
    'Spareparts',
    'Lubricants',
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
                    <Link href="/shop?category=Lubricants" className="text-sm font-medium transition-colors hover:text-black/80">
                        Lubricants
                    </Link>
                    <Link href="/shop?category=Batteries" className="text-sm font-medium transition-colors hover:text-black/80">
                        Batteries
                    </Link>
                    <Link href="/shop?category=Spareparts" className="text-sm font-medium transition-colors hover:text-black/80">
                        Spare Parts
                    </Link>
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
