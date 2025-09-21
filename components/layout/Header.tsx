import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-600">StayFinder</span>
          </Link>

          {/* Accommodation types (small, hide on xs) */}
          <nav className="hidden md:flex gap-3 text-sm text-gray-600">
            <Link href="#" className="hover:underline">Rooms</Link>
            <Link href="#" className="hover:underline">Mansion</Link>
            <Link href="#" className="hover:underline">Countryside</Link>
            <Link href="#" className="hover:underline">Beachfront</Link>
          </nav>
        </div>

        {/* Search & actions */}
        <div className="flex items-center gap-3 w-full max-w-xl mx-4">
          <input
            id="site-search"
            name="search"
            placeholder="Search city, state or property"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm text-gray-700 hidden sm:inline">Sign in</Link>
          <Link href="#" className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">Sign up</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;