import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { ArrowRight, Star, Phone } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 8); // Display 8 products

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-black py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Premium Spare Parts for
            <br />
            <span className="text-brand-red">All Major Japanese & Korean Brands</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto">
            Your reliable source for genuine and high-quality aftermarket parts.
            Fast shipping and competitive prices.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/shop">
              <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white min-w-[200px] h-14 text-lg">
                Browse All Parts
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black min-w-[200px] h-14 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Selection */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Select Your Brand</h2>
            <p className="text-gray-600">Choose from our extensive collection of genuine parts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Mitsubishi', logo: '/brands/mitsubishi.png' },
              { name: 'Isuzu', logo: '/brands/isuzu.png' },
              { name: 'Toyota', logo: '/brands/toyota.png' },
              { name: 'Nissan', logo: '/brands/nissan.png' },
              { name: 'Hino', logo: '/brands/hino.png' },
              { name: 'UD', logo: '/brands/ud.png' },
              { name: 'Hyundai', logo: '/brands/hyundai.png' },
              { name: 'Kia', logo: '/brands/kia.png' },
            ].map((brand) => (
              <Link key={brand.name} href={`/shop?brand=${brand.name}`} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-brand-red hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-40 md:h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={200}
                      height={100}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold text-brand-red flex items-center gap-1">
                      View Parts <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Oil & Lubricants Brands */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(230,57,70,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Premium Oils & Lubricants</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Top-quality motor oils and lubricants from world-leading brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { name: 'Castrol', logo: '/oils/castrol.png' },
              { name: 'Shell', logo: '/oils/shell.png' },
              { name: 'ADNOC', logo: '/oils/adnoc.png' },
              { name: 'Total', logo: '/oils/total.png' },
              { name: 'Zic', logo: '/oils/zic.png' },
              { name: 'Dufe', logo: '/oils/dufe.png' },
            ].map((oil) => (
              <Link key={oil.name} href={`/shop?category=${encodeURIComponent(oil.name)}`} className="group">
                <div className="bg-transparent rounded-xl transform hover:-translate-y-1 transition-all duration-300 h-48 flex items-center justify-center p-4 relative overflow-hidden">

                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={oil.logo}
                      alt={`${oil.name} logo`}
                      width={180}
                      height={120}
                      className="object-contain max-h-32 transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>


      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/shop" className="text-brand-red font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-white relative items-center justify-center flex overflow-hidden p-6">
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
                  {product.condition === 'New' && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-10">New</span>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-brand-red font-semibold mb-1 uppercase tracking-wider">{product.brand}</div>
                  <h3 className="font-bold text-lg mb-1 truncate">{product.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">{product.sku}</div>
                  <Link href={`/product/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full group-hover:bg-black group-hover:text-white transition-colors">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4"><Star className="h-8 w-8 text-brand-red" /></div>
            <h3 className="font-bold text-lg mb-2">Genuine Parts</h3>
            <p className="text-gray-400">Guaranteed authenticity for all major brands.</p>
          </div>
          <div>
            <div className="flex justify-center mb-4"><Phone className="h-8 w-8 text-brand-red" /></div>
            <h3 className="font-bold text-lg mb-2">Expert Support</h3>
            <p className="text-gray-400">Our team helps you find the exact part you need.</p>
          </div>
          <div>
            <div className="flex justify-center mb-4 text-brand-red font-bold text-2xl">⚡</div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-400">Quick shipping across the region.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
