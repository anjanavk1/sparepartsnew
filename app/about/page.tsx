export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black py-20 md:py-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            About <span className="text-brand-red">JESR AL MANAMAH</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Your trusted partner for premium automotive spare parts and lubricants across the UAE
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Founded in the heart of the UAE, JESR AL MANAMAH has established itself as a leading provider
                                of genuine automotive spare parts and premium lubricants. With years of experience in the
                                automotive industry, we understand the critical importance of quality, reliability, and customer satisfaction.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                We specialize in supplying parts for major Japanese and Korean vehicle brands including Mitsubishi,
                                Isuzu, Toyota, Nissan, Hino, UD Trucks, Hyundai, and Kia. Our extensive inventory ensures that
                                whether you're maintaining a personal vehicle or managing a commercial fleet, we have the parts you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To provide our customers with genuine, high-quality automotive parts and lubricants at competitive
                                prices, backed by exceptional service and expert knowledge. We strive to be the first choice for
                                automotive professionals and vehicle owners throughout the UAE.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">👁️</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To become the UAE's most trusted name in automotive spare parts and lubricants, recognized for
                                our commitment to quality, innovation, and customer satisfaction. We aim to build long-lasting
                                relationships based on trust and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">✓</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                            <p className="text-gray-600">
                                We source only genuine parts from authorized distributors, ensuring authenticity and reliability
                                for every product we sell.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Service</h3>
                            <p className="text-gray-600">
                                Quick delivery and efficient service to minimize downtime and keep your vehicles running smoothly.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Customer First</h3>
                            <p className="text-gray-600">
                                Our expert team provides personalized support to help you find exactly what you need for your vehicle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🚗</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Genuine Spare Parts</h4>
                                <p className="text-gray-600">
                                    Comprehensive inventory for Mitsubishi, Isuzu, Toyota, Nissan, Hino, UD, Hyundai, and Kia vehicles
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🛢️</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Premium Lubricants</h4>
                                <p className="text-gray-600">
                                    Top-quality motor oils from Castrol, Shell, ADNOC, Total, Zic, and Dufe
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">💡</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Expert Guidance</h4>
                                <p className="text-gray-600">
                                    Professional advice to help you choose the right parts for your specific needs
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">📦</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Bulk Orders</h4>
                                <p className="text-gray-600">
                                    Competitive pricing for fleet operators and automotive workshops
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-black text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your automotive parts and lubricant needs. Our team is ready to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/shop"
                            className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Browse Our Products
                        </a>
                        <a
                            href="/contact"
                            className="inline-block bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
