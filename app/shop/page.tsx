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
            return p.category === selectedCategory;
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Category Header - Shows when category is selected */}
            {selectedCategory && (
                <section className="bg-gradient-to-r from-brand-red to-red-700 py-12 md:py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                            {selectedCategory} Products
                        </h1>
                        <p className="text-white/90 text-lg">
                            Browse our premium {selectedCategory} oil and lubricants collection
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
                                    <div key={product.id} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden group hover:shadow-xl hover:border-brand-red transition-all duration-300">
                                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-white relative items-center justify-center flex overflow-hidden p-6">
                                            {/* Product Image */}
                                            {product.image ? (
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100">
                                                    {product.name}
                                                </div>
                                            )}
                                            {product.condition === 'New' && (
                                                <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full z-10">NEW</span>
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-xs text-brand-red font-bold uppercase tracking-wider">{product.brand}</div>
                                                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</div>
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
                                            <div className="text-sm text-gray-500 mb-4">{product.sku}</div>
                                            <Link href={`/product/${product.id}`} className="w-full">
                                                <Button variant="outline" className="w-full group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-colors font-semibold">
                                                    View Details
                                                </Button>
                                            </Link>
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
