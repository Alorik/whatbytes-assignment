'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { items, removeItem, updateQuantity, totalPrice, totalItems } =
    useCartStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-500 mb-4">
              Your cart is empty
            </p>
            <Link
              href="/"
              className="bg-[#1a56db] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e40af] transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Items */}
            <div className="flex-1 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4 items-center"
                >
                  <Link href={`/product/${item.id}`}>
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 text-sm hover:text-[#1a56db]">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {item.category}
                    </p>
                    <p className="font-bold text-gray-900 mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 font-bold text-sm"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-4">
                <h2 className="font-bold text-gray-900 text-lg mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({totalItems()})</span>
                    <span>${totalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>${totalPrice()}</span>
                </div>
                <button className="mt-4 w-full bg-[#1a56db] hover:bg-[#1e40af] text-white font-bold py-3 rounded-xl transition-colors">
                  Checkout
                </button>
                <Link
                  href="/"
                  className="mt-3 block text-center text-sm text-[#1a56db] hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
