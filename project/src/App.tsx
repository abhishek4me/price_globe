import React from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { ProductCard } from './components/ProductCard';
import type { Product, PriceEntry } from './types';

// Sample data - In a real app, this would come from an API
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max (256GB)',
    category: 'Electronics',
    description: 'Latest iPhone model with advanced camera system and A17 Pro chip',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Samsung 65" OLED 4K TV',
    category: 'Electronics',
    description: 'Premium OLED TV with stunning picture quality and smart features',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
  },
];

const samplePrices: PriceEntry[] = [
  {
    id: '1',
    productId: '1',
    price: 1099,
    currency: 'USD',
    country: 'United States',
    store: 'Apple Store',
    type: 'online',
    verified: true,
    timestamp: new Date().toISOString(),
    userId: 'user1',
  },
  {
    id: '2',
    productId: '2',
    price: 1799,
    currency: 'USD',
    country: 'United States',
    store: 'Best Buy',
    type: 'online',
    verified: true,
    timestamp: new Date().toISOString(),
    userId: 'user1',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <Filters />
          </aside>
          
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  prices={samplePrices.filter(p => p.productId === product.id)}
                  userCurrency="USD"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;