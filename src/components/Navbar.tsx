import { useState } from 'react';
import { MapPin, Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 text-2xl font-bold text-orange-500">
              Dhaba
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <MapPin className="text-gray-500" size={20} />
                <select className="text-gray-700 bg-transparent focus:outline-none">
                  <option>San Francisco</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>
            </div>
          </div>

          {/* Desktop Navbar Items */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants and food"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
              />
            </div>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <ShoppingBag size={20} />
              <span>Cart</span>
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-gray-500" size={20} />
              <select className="text-gray-700 bg-transparent focus:outline-none">
                <option>San Francisco</option>
                <option>New York</option>
                <option>Los Angeles</option>
              </select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants and food"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              />
            </div>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 w-full">
              <ShoppingBag size={20} />
              <span>Cart</span>
            </button>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
