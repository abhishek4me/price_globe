export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface PriceEntry {
  id: string;
  productId: string;
  price: number;
  currency: string;
  country: string;
  store: string;
  type: 'online' | 'physical';
  verified: boolean;
  timestamp: string;
  userId: string;
}

export interface Comment {
  id: string;
  productId: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  preferredCurrency: string;
  upcomingDestinations: string[];
}