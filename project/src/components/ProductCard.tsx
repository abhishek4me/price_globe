import React from 'react';
import { MapPin, ExternalLink, ThumbsUp } from 'lucide-react';
import type { Product, PriceEntry } from '../types';

interface ProductCardProps {
  product: Product;
  prices: PriceEntry[];
  userCurrency: string;
}

export function ProductCard({ product, prices, userCurrency }: ProductCardProps) {
  const lowestPrice = prices.reduce((min, price) => 
    price.price < min.price ? price : min
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="ml-1 text-sm text-gray-600">{lowestPrice.country}</span>
            </div>
            <div className="text-lg font-bold text-indigo-600">
              {lowestPrice.price} {lowestPrice.currency}
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Verify Price
              </button>
            </div>
            <a
              href="#"
              className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              <span>View Details</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}