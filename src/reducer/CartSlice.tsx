import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;    
  titleRu: string;   
  price: number;
  image: string;
  sku: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  shippingCost: number;
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    const savedCart = localStorage.getItem("greenshop_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Could not load cart from localStorage", error);
    return [];
  }
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  shippingCost: 16.00,
};

const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem("greenshop_cart", JSON.stringify(items));
  } catch (error) {
    console.error("Could not save cart to localStorage", error);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity"> & { quantity?: number }>) => {
      const { quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          titleRu: action.payload.titleRu,
          price: action.payload.price,
          image: action.payload.image,
          sku: action.payload.sku,
          quantity
        });
      }
      saveCartToStorage(state.items);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartToStorage(state.items);
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("greenshop_cart");
    }
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;