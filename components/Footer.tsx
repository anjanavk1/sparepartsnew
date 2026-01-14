export function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-auto">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">JESR AL MANAMAH</h3>
                        <p className="text-sm text-gray-500">
                            Your trusted source for premium spare parts for Toyota, Nissan, and Ford.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="/" className="hover:text-black">Home</a></li>
                            <li><a href="/shop" className="hover:text-black">Shop</a></li>
                            <li><a href="/contact" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <p className="text-sm text-gray-500">
                            JESR AL MANAMAH AUTO SPARE PARTS TR, 7CXF+5GM<br />
                            Industrial Area 10 - Industrial Area - Sharjah<br />
                            06 556 8682<br />
                            info@jesrparts.com
                        </p>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} Jesr Al Manamah. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
