import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IProduct {
  id: number;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  category: string;
  size: string;
  price: number;
  oldPrice?: number | null;
  discount?: string | number | null;
  rating: number;
  reviews: number;
  sku: string;
  tags: string[];
  images: string[];
  stock: number;
  featured: boolean;
  popular: boolean;
  createdAt: string;
}

interface IProductsState {
  items: IProduct[];
  loading: boolean;
  searchQuery: string;
}

const initialState: IProductsState = {
  items: [],
  loading: false,
  searchQuery: '',
};

const API_URL = 'http://localhost:3000/plants';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get<IProduct[]>(API_URL);
  return response.data;
});

export const addProduct = createAsyncThunk('products/add', async (product: Omit<IProduct, 'id'>) => {
  const response = await axios.post<IProduct>(API_URL, product);
  return response.data;
});

export const editProduct = createAsyncThunk('products/edit', async (product: IProduct) => {
  const response = await axios.put<IProduct>(`${API_URL}/${product.id}`, product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const userSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const idx = state.items.findIndex(item => item.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const { setSearchQuery } = userSlice.actions;
export default userSlice.reducer;