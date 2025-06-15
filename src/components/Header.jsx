import React, { useState } from "react";
import { Menu, Search, ShoppingBag as BagIcon, User, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Badge from "@mui/material/Badge";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const totalCount = cartItems.length;
  console.log(cartItems.le);
  

  return (
    <header className="border-b fixed w-full top-0 z-40 bg-white">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2">
          <Menu className="h-5 w-5" />
        </button>
        <div className="font-bold text-xl"><NavLink to="/">SHOP.CO</NavLink></div>

        <nav className="hidden lg:flex space-x-8">
          <NavLink to="/shop" className="hover:text-gray-600">Shop</NavLink>
          <NavLink to="/sale" className="hover:text-gray-600">On Sale</NavLink>
          <NavLink to="/new" className="hover:text-gray-600">New Arrivals</NavLink>
          <NavLink to="/brands" className="hover:text-gray-600">Brands</NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input type="text" placeholder="Search…" className="bg-transparent outline-none flex-1 text-sm" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md hidden md:block">
            <User className="h-5 w-5" />
          </button>
          <NavLink to="/cart" className="p-2">
            <Badge badgeContent={totalCount} color="secondary" showZero={false}>
              <BagIcon className="h-5 w-5" />
            </Badge>
          </NavLink>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="w-80 bg-white h-full">
            <div className="flex justify-between p-4 border-b">
              <div className="text-xl font-bold">SHOP.CO</div>
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="h-6 w-6" /></button>
            </div>
            <nav className="p-4 space-y-4">
              <NavLink to="/shop" className="block text-lg">Shop</NavLink>
              <NavLink to="/sale" className="block text-lg">On Sale</NavLink>
              <NavLink to="/new" className="block text-lg">New Arrivals</NavLink>
              <NavLink to="/brands" className="block text-lg">Brands</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
