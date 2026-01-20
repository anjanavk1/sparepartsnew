'use client';

import { Suspense } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { ArrowRight, Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ShopContent() {
    const searchParams = useSearchParams();
    const selectedBrand = searchParams.get('brand') || undefined;
    const selectedCategory = searchParams.get('category') || undefined;

    const filteredProducts = products.filter((p) => {
        if (selectedBrand && p.brand !== selectedBrand && p.brand !== 'Detex' as any) return false; // Detex exception if we want to show it? No, standard filtering.

        if (selectedCategory) {
            if (selectedCategory === 'Lubricants') {
                const lubricantBrands = ['Castrol', 'Shell', 'ADNOC', 'Total', 'Zic', 'Dufe', 'BP'];
                return lubricantBrands.includes(p.category);
            }
            if (selectedCategory === 'Batteries') {
                return p.category === 'Detex';
            }
            if (selectedCategory === 'Spareparts') {
                const lubricantBrands = ['Castrol', 'Shell', 'ADNOC', 'Total', 'Zic', 'Dufe', 'BP'];
                return !lubricantBrands.includes(p.category) && p.category !== 'Detex';
            }
            // Fallback for direct category links if any exist or if using exact match
            const categoryMatch = p.category === selectedCategory;
            const subCategoryMatch = searchParams.get('subcategory') ? p.subcategory === searchParams.get('subcategory') : true;

            return categoryMatch && subCategoryMatch;
        }
        return true;
    });

    const brands = ['Mitsubishi', 'Isuzu', 'Toyota', 'Nissan', 'Hino', 'UD', 'Hyundai', 'Kia'];
    const lubricantBrands = [
        'Castrol',
        'Shell',
        'ADNOC',
        'Total',
        'Zic',
        'Dufe',
        'BP',
    ];

    const mainCategories = [
        'Batteries',
        'Spareparts',
        'Lubricants',
    ];

    // Custom Layout for Spareparts Category
    if (selectedCategory === 'Spareparts') {
        const sparePartSubcategories = [
            { name: 'Engine Parts', image: '/categories/engine-parts.png' },
            { name: 'Suspension Parts', image: '/categories/suspension-parts.png' },
            { name: 'Multi Bush', image: '/categories/multi-bush.png' },
            { name: 'Wheel Assembly', image: '/categories/wheel-assembly.png' },
            { name: 'Steering System', image: '/categories/steering-system.png' },
        ];

        return (
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-zinc-900 py-24 text-center text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')]"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Top-Quality <span className="text-brand-red">Auto Spare Parts</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Reliable, durable, and high-performance parts for every vehicle needs.
                        </p>
                    </div>
                </section>

                {/* Browse by Category */}
                <section className="py-20 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                        <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {sparePartSubcategories.map((sub) => (
                            <Link href={`/shop?category=Spareparts&subcategory=${encodeURIComponent(sub.name)}`} key={sub.name} className="group cursor-pointer">
                                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-transparent group-hover:border-brand-red/20 group-hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center aspect-square">
                                    <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden relative">
                                        <Image
                                            src={sub.image}
                                            alt={sub.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-brand-red transition-colors">{sub.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Products (Filtered List) */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                            <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.slice(0, 8).map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="aspect-square bg-white p-6 flex items-center justify-center relative border-b">
                                        {/* Product Image */}
                                        {product.image ? (
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="text-gray-400 font-medium">No Image</div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-brand-red font-bold uppercase mb-2">{product.brand}</div>
                                        <h3 className="font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                                        <Link href={`/product/${product.id}`}>
                                            <Button className="w-full bg-gray-900 hover:bg-brand-red text-white transition-colors mt-4">View Details</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/shop">
                                <Button variant="outline" size="lg" className="border-gray-300 hover:border-brand-red hover:text-brand-red">View All Products</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Info / SEO Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose Our Spare Parts?</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-lg">Genuine Quality</h3>
                                        <p className="text-gray-600">We source only authentic and high-grade OEM parts for maximum durability.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-lg">Wide Compatibility</h3>
                                        <p className="text-gray-600">Parts available for Toyota, Nissan, Mitsubishi, Isuzu, and more.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-lg">Expert Support</h3>
                                        <p className="text-gray-600">Our team helps you find exactly the right part for your vehicle model.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12 text-center">
                            <h3 className="text-2xl font-bold mb-4">Need Help Finding a Part?</h3>
                            <p className="text-gray-600 mb-8">Contact our sales team for instant availability check and pricing.</p>
                            <a href="tel:+97165568682">
                                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto">Call Us Now: 06 556 8682</Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Category Header - Shows when category is selected */}
            {/* Category Header - Shows when category is selected */}
            {selectedCategory && (
                <section className="bg-gradient-to-r from-brand-red to-red-700 py-12 md:py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                            {searchParams.get('subcategory') ? searchParams.get('subcategory') : `${selectedCategory} Products`}
                        </h1>
                        <p className="text-white/90 text-lg">
                            Browse our premium {searchParams.get('subcategory') ? searchParams.get('subcategory') : selectedCategory} collection
                        </p>
                    </div>
                </section>
            )}


            <div className="container mx-auto px-4 py-8 md:py-12">
                {!selectedCategory && (
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop All Products</h1>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl shadow-sm border sticky top-24">
                            <div className="flex items-center gap-2 font-bold mb-6 text-lg">
                                <Filter className="h-5 w-5 text-brand-red" /> Filters
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-3 text-gray-900">Vehicle Brand</h3>
                                <div className="space-y-2">
                                    <Link href={`/shop${selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : ''}`}
                                        className={`block text-sm py-2 px-3 rounded-lg transition-colors ${!selectedBrand ? 'font-bold bg-brand-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                                        All Brands
                                    </Link>
                                    {brands.map(brand => (
                                        <Link
                                            key={brand}
                                            href={`/shop?brand=${brand}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}
                                            className={`block text-sm py-2 px-3 rounded-lg transition-colors ${selectedBrand === brand ? 'font-bold bg-brand-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            {brand}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 border-t pt-6">
                                <h3 className="font-semibold mb-3 text-gray-900">Batteries</h3>
                                <div className="space-y-2">
                                    <Link
                                        href={`/shop?category=Detex${selectedBrand ? `&brand=${selectedBrand}` : ''}`}
                                        className={`block text-sm py-2 px-3 rounded-lg transition-colors ${selectedCategory === 'Detex' ? 'font-bold bg-brand-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                                        Detex
                                    </Link>
                                </div>

                                <h3 className="font-semibold mb-3 mt-6 text-gray-900">Lubricant Brands</h3>
                                <div className="space-y-2">
                                    {lubricantBrands.map(cat => (
                                        <Link
                                            key={cat}
                                            href={`/shop?category=${encodeURIComponent(cat)}${selectedBrand ? `&brand=${selectedBrand}` : ''}`}
                                            className={`block text-sm py-2 px-3 rounded-lg transition-colors ${selectedCategory === cat ? 'font-bold bg-brand-red text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {(selectedBrand || selectedCategory) && (
                                <Link href="/shop">
                                    <Button variant="outline" size="sm" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                                        Clear All Filters
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                            </div>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                                <p className="text-gray-500 text-lg mb-4">No products found for your selection.</p>
                                <Link href="/shop" className="text-brand-red font-semibold hover:underline">Clear all filters</Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="bg-white border text-center border-gray-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                                        <div className="aspect-square bg-white relative items-center justify-center flex overflow-hidden p-8 border-b border-gray-100">
                                            {/* Product Image */}
                                            {product.image ? (
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-50">
                                                    {product.name}
                                                </div>
                                            )}
                                        </div>
                                        {/* Orange Footer Style */}
                                        <div className="bg-[#e65100] p-4 text-white flex flex-col justify-between flex-grow min-h-[120px]">
                                            <h3 className="font-bold text-lg leading-tight mb-4 uppercase text-left">{product.name}</h3>

                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-sm font-medium">Request Quote</span>
                                                <Link href={`/product/${product.id}`}>
                                                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                                        <div className="w-2 h-2 rounded-full bg-[#e65100]"></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">Loading...</div>
            </div>
        }>
            <ShopContent />
        </Suspense>
    );
}
