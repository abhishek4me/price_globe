import React from 'react';
import { Search, Globe, User, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PriceGlobe</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-indigo-600">
              <MapPin className="h-5 w-5" />
              <span className="ml-1">Add Price</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span className="ml-1">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}