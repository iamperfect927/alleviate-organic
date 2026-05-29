'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Herb } from '../data/herbs';

export interface CartItem {
  herb: Herb;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (herb: Herb) => void;
  removeFromCart: (herbId: string) => void;
  updateQuantity: (herbId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ao_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart data from localStorage', e);
      }
    }
    setIsMounted(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('ao_cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (herb: Herb) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.herb.id === herb.id);
      if (existing) {
        return prev.map((item) =>
          item.herb.id === herb.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { herb, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto-open cart drawer for immediate visual feedback
  };

  const removeFromCart = (herbId: string) => {
    setCart((prev) => prev.filter((item) => item.herb.id !== herbId));
  };

  const updateQuantity = (herbId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(herbId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.herb.id === herbId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Only expose client values once mounted to avoid SSR-Hydration mismatch
  const cartCount = isMounted ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;
  const cartTotal = isMounted ? cart.reduce((sum, item) => sum + item.herb.price * item.quantity, 0) : 0;
  const exposedCart = isMounted ? cart : [];

  return (
    <CartContext.Provider
      value={{
        cart: exposedCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
