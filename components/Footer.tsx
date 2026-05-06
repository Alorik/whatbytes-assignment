import Link from 'next/link';
import { categories } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white mt-16 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters column */}
        <div>
          <h4 className="font-bold mb-3">Filters</h4>
          <div className="flex flex-wrap gap-2 text-sm text-blue-200">
            {categories.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-3">About Us</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#1a56db] flex items-center justify-center hover:bg-blue-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#1a56db] flex items-center justify-center hover:bg-blue-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#1a56db] flex items-center justify-center hover:bg-blue-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-blue-800 text-sm text-blue-300">
        © 2024 American
      </div>
    </footer>
  );
}
