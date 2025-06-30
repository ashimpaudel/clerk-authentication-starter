
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Solar Power Bank 20000mAh",
    price: "$79.99",
    image: "🔋",
    description: "High-capacity solar power bank with fast charging technology",
    features: ["Waterproof", "LED Flashlight", "Wireless Charging"]
  },
  {
    id: 2,
    name: "Bamboo Wireless Charger",
    price: "$34.99",
    image: "📱",
    description: "Sustainable bamboo wireless charging pad for all devices",
    features: ["Fast Charging", "Eco-Friendly", "Universal Compatibility"]
  },
  {
    id: 3,
    name: "Biodegradable Phone Case",
    price: "$24.99",
    image: "📱",
    description: "Compostable phone case made from plant-based materials",
    features: ["Drop Protection", "Biodegradable", "Multiple Colors"]
  },
  {
    id: 4,
    name: "Kinetic Energy Charger",
    price: "$89.99",
    image: "⚡",
    description: "Generate power through motion with our kinetic charger",
    features: ["Motion Powered", "Compact Design", "USB-C Output"]
  },
  {
    id: 5,
    name: "Recycled Aluminum Stand",
    price: "$45.99",
    image: "💻",
    description: "Adjustable laptop stand made from 100% recycled aluminum",
    features: ["Adjustable Height", "Cooling Design", "Recycled Materials"]
  },
  {
    id: 6,
    name: "Smart Garden Monitor",
    price: "$129.99",
    image: "🌱",
    description: "IoT device to monitor and optimize your garden's health",
    features: ["Soil Monitoring", "App Control", "Solar Powered"]
  }
];

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="max-w-[75rem] mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our best-selling eco-friendly tech products that are making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">
                  {product.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
