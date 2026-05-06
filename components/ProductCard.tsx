'use client';

import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCartStore } from '@/lib/cartStore';
import StarRating from './StarRating';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <Link href={`/product/${product.id}`} className="block">
        <div className="bg-gray-100 h-44 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm mb-1 hover:text-[#1a56db]">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-gray-900 font-bold mt-1 mb-3">${product.price}</p>
        <button
          onClick={() => addItem(product)}
          className="mt-auto bg-[#1a56db] hover:bg-[#1e40af] text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
