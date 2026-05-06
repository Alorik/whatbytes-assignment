'use client';

import { categories } from '@/lib/products';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
}

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
}: SidebarProps) {
  return (
    <aside className="w-64 shrink-0">
      <div className="bg-[#1a56db] text-white rounded-xl p-5">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
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
    </aside>
  );
}
