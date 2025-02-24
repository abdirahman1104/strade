export enum UserRole {
  ADMIN = 'ADMIN',
  BUSINESS = 'BUSINESS',
  SUPPLIER = 'SUPPLIER',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
  businessName?: string;
  country?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  images: string[];
  supplierId: string;
  stock: number;
  minOrderQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Business {
  id: string;
  userId: string;
  name: string;
  description?: string;
  logo?: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website?: string;
  registrationNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Supplier {
  id: string;
  userId: string;
  companyName: string;
  description?: string;
  logo?: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website?: string;
  specialization: string[];
  createdAt: Date;
  updatedAt: Date;
}
