import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('/api/cart');
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (item) => {
  const response = await axios.post('/api/cart', item);
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (id) => {
  const response = await axios.delete(`/api/cart/${id}`);
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], status: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      });
  },
});

export default cartSlice.reducer;
