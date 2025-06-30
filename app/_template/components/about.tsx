
export function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-[75rem] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Building a Sustainable Future
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At EcoTech, we believe technology should enhance our lives without harming our planet. 
              Founded in 2024, we're on a mission to create innovative, sustainable tech products 
              that reduce environmental impact while delivering exceptional performance.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Carbon Neutral</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Our Story
              </button>
              <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Sustainability Report
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                      ♻️
                    </div>
                    <span>5 tons of e-waste prevented</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      🌍
                    </div>
                    <span>Carbon neutral shipping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                      🌱
                    </div>
                    <span>1000 trees planted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
