import React from 'react';
import { Filter, Map } from 'lucide-react';

export function Filters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Living</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option>All Countries</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Japan</option>
            <option>Germany</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Store Type
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
              <span className="ml-2 text-sm text-gray-600">Online Stores</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
              <span className="ml-2 text-sm text-gray-600">Physical Stores</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center">
            <Map className="h-4 w-4 mr-2" />
            Show Travel Deals
          </button>
        </div>
      </div>
    </div>
  );
}