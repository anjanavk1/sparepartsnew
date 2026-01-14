import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { Phone, CheckCircle, ArrowLeft, MessageSquare, Shield, Truck, Award } from "lucide-react";

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const product = products.find((p) => p.id === resolvedParams.id);

    if (!product) {
        notFound();
    }

    const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${product.name} (SKU: ${product.sku})`);
    const whatsappLink = `https://wa.me/971501234567?text=${whatsappMessage}`;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-black">Home</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-black">Shop</Link>
                <span>/</span>
                <span className="text-black font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Images */}
                <div className="bg-white rounded-xl aspect-square flex items-center justify-center relative overflow-hidden p-8 border">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-8"
                            priority
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                            <span className="text-4xl mb-2">⚙️</span>
                            <span className="font-bold">{product.name}</span>
                        </div>
                    )}
                </div>

                {/* Right Column: Details */}
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase mb-4">
                        Genuine {product.brand} Part
                    </div>
                    <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>

                    {/* Quick Specs */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8 border">
                        <h3 className="font-semibold mb-4 text-lg">Specifications</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Brand</span>
                                <span className="font-medium">{product.brand}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">System</span>
                                <span className="font-medium">{product.category}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">SKU</span>
                                <span className="font-medium">{product.sku}</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-gray-500">Condition</span>
                                <span className="text-green-600 font-bold flex items-center gap-1">
                                    <CheckCircle className="h-4 w-4" /> {product.condition}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">Product Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            High-quality {product.name.toLowerCase()} designed specifically for {product.brand} vehicles.
                            This genuine OEM part ensures optimal performance and longevity. Manufactured to exact specifications
                            and rigorously tested for quality and reliability.
                        </p>
                    </div>

                    {/* Features & Benefits */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-4 text-lg">Features & Benefits</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">100% Genuine {product.brand} OEM Part</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">Factory-tested for quality assurance</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">Perfect fit and compatibility guaranteed</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">Extended durability and performance</span>
                            </div>
                        </div>
                    </div>

                    {/* Compatibility */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-8 border border-blue-100">
                        <h3 className="font-semibold mb-2 text-sm text-blue-900">Compatibility</h3>
                        <p className="text-sm text-blue-800">
                            Compatible with various {product.brand} models. Contact us to confirm fitment for your specific vehicle.
                        </p>
                    </div>

                    {/* Lead Section */}
                    <div className="space-y-3">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                                <MessageSquare className="mr-2 h-5 w-5" /> Order via WhatsApp
                            </Button>
                        </a>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button variant="outline" className="w-full h-14 text-lg border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                                Get Quote
                            </Button>
                        </a>
                        <a href="tel:+971501234567" className="block w-full">
                            <Button variant="outline" className="w-full h-14 text-lg border-2">
                                <Phone className="mr-2 h-5 w-5" /> Direct Call
                            </Button>
                        </a>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Availability is confirmed instantly via WhatsApp or Call.
                        </p>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <Shield className="h-10 w-10 text-brand-red mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Genuine Parts</h4>
                    <p className="text-sm text-gray-600">100% authentic OEM parts guaranteed</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <Truck className="h-10 w-10 text-brand-red mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Quick shipping across the UAE</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <Award className="h-10 w-10 text-brand-red mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Quality Assured</h4>
                    <p className="text-sm text-gray-600">Tested and certified for performance</p>
                </div>
            </div>
        </div>
    );
}
