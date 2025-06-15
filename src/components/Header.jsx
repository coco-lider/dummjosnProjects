import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
  return (
    <div>
      {/* Header */}
      <header className="border-b border-gray-200 fixed w-full top-0 bg-white z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="font-bold text-xl">SHOP.CO</div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-gray-600">
                Shop
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">
                On Sale
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">
                New Arrivals
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">
                Brands
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <Search className="h-5 w-5 md:hidden" />
                <User className="h-5 w-5 hidden md:block" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed left-0 top-0 h-full w-80 bg-white">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="font-bold text-xl">SHOP.CO</div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              <a
                href="#"
                className="block text-lg font-medium hover:text-gray-600"
              >
                Shop
              </a>
              <a
                href="#"
                className="block text-lg font-medium hover:text-gray-600"
              >
                On Sale
              </a>
              <a
                href="#"
                className="block text-lg font-medium hover:text-gray-600"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block text-lg font-medium hover:text-gray-600"
              >
                Brands
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
