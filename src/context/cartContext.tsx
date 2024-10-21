'use client'
import React, { createContext, useState, useContext } from 'react';

// Define the shape of your cart item
interface CartItem {
  priceId: string;
  quantity: number;
}

// Context type
interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (priceId: string, quantity: number) => void;
  removeItem: (priceId: string) => void;
  clearCart: () => void;
}

// Create the Cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook for accessing the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item or update quantity if the item exists
  const addItem = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.priceId === newItem.priceId);
      if (existingItem) {
        // Update the quantity of the existing item
        return prevCart.map(item => 
          item.priceId === newItem.priceId 
            ? { ...item, quantity: item.quantity + newItem.quantity } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevCart, newItem];
      }
    });
  };

  // Function to update the quantity of a specific item
  const updateQuantity = (priceId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map(item => 
        item.priceId === priceId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (priceId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.priceId !== priceId));
  };

  // Function to clear the entire cart after checkout
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

