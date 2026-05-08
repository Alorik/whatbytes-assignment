"use client";

import { categories } from "@/lib/products";

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  storeName?: string;
}

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  storeName = "Category",
}: SidebarProps) {
  const priceOptions = [500, 1000, 2000, 5000, 10000];

  return (
    <aside className="w-64 shrink-0 flex flex-col gap-4">
      {/* ── Original Blue Filters Panel ── */}
      <div className="bg-[#1a56db] text-white rounded-xl p-5">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => onCategoryChange(cat)}
                  className="w-4 h-4 accent-white"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full accent-white"
            style={{
              background: `linear-gradient(to right, white ${(maxPrice / 1000) * 100}%, rgba(255,255,255,0.3) ${(maxPrice / 1000) * 100}%)`,
            }}
          />
          <div className="flex justify-between text-sm mt-1">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* ── New White Store Panel ── */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        {/* Store Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-5">{storeName}</h1>

        {/* Category */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Category</h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="storeCategory"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => onCategoryChange(cat)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-5" />

        {/* Price Dropdown */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Price</h2>
          <select
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            {priceOptions.map((price) => (
              <option key={price} value={price}>
                {price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}
