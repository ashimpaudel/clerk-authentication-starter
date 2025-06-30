
import { UserDetails } from "../components/user-details";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { OrderHistory } from "../components/order-history";
import { Footer } from "../_template/components/footer";
import Link from "next/link";

export default async function DashboardPage() {
  await auth.protect();

  return (
    <>
      <main className="max-w-[75rem] w-full mx-auto">
        <div className="px-12 py-8">
          <header className="flex items-center justify-between w-full mb-8">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-green-600">
                EcoTech
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Store
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Cart (2)
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-8",
                  },
                }}
              />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/orders" className="p-6 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                  <div className="text-2xl mb-2">📦</div>
                  <h3 className="font-semibold mb-1">Orders</h3>
                  <p className="text-sm text-gray-600">View order history</p>
                </Link>
                <Link href="/wishlist" className="p-6 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                  <div className="text-2xl mb-2">❤️</div>
                  <h3 className="font-semibold mb-1">Wishlist</h3>
                  <p className="text-sm text-gray-600">Saved items</p>
                </Link>
                <Link href="/rewards" className="p-6 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="font-semibold mb-1">Eco Points</h3>
                  <p className="text-sm text-gray-600">250 points earned</p>
                </Link>
              </div>

              <OrderHistory />
            </div>
            
            <div>
              <UserDetails />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
