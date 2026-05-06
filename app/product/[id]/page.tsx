'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/cartStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  const [searchQuery, setSearchQuery] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header searchQuery="" onSearchChange={() => {}} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <Link href="/" className="text-[#1a56db] hover:underline">
              Back to listing
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#1a56db]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.title}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-10 min-h-72">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-gray-900 mb-3">
                ${product.price}
              </p>

              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-gray-700">Category</span>
                  <br />
                  <span className="text-gray-500">{product.category}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Brand</span>
                  <br />
                  <span className="text-gray-500">{product.brand}</span>
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#1a56db] hover:bg-[#1e40af] text-white font-bold py-3 px-8 rounded-xl transition-colors text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
