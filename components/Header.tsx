'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="bg-[#1a56db] text-white px-6 py-3 flex justify-between items-center gap-4">
      <Link href="/" className="text-2xl font-bold mr-4 whitespace-nowrap">
        Logo
      </Link>
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 bg-white placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>
      <Link
        href="/cart"
        className="flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap ml-auto"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </div>
        Cart
      </Link>
    </header>
  );
}
