import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { ClerkLogo } from "./clerk-logo";
import { NextLogo } from "./next-logo";
import { DeployButton } from "./deploy-button";

export function ProductHero() {
  return (
    <main className="bg-gradient-to-br from-green-50 to-blue-50 relative min-h-screen">
      <div className="w-full bg-white/80 backdrop-blur-sm max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2]">

        {/* Header */}
        <div className="px-12 py-6 border-b border-[#F2F2F4] relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-green-600">
                EcoTech
              </div>
              <nav className="hidden md:flex gap-6">
                <Link href="#products" className="text-gray-600 hover:text-green-600">Products</Link>
                <Link href="#about" className="text-gray-600 hover:text-green-600">About</Link>
                <Link href="#contact" className="text-gray-600 hover:text-green-600">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Dashboard
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="px-12 py-24 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sustainable Tech for a 
            <span className="text-green-600"> Better Tomorrow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover eco-friendly technology products that don't compromise on performance. 
            From solar chargers to biodegradable phone cases, we're revolutionizing how you interact with technology.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link href="#products" className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Shop Now
            </Link>
            <Link href="#about" className="px-8 py-4 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold">
              Learn More
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 grid grid-cols-3 gap-4">
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Solar Chargers</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Eco Cases</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Green Gadgets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}