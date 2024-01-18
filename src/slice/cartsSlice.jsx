import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
  const response = await axios.get('http://localhost:3000/keranjangs');
  return response.data;
});

const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    }
  })

  export const selectCarts = (state) => state.carts.data;
  export const selectCartsLoading = (state) => state.carts.loading;
  export const selectCartsError = (state) => state.carts.error;

  export default cartsSlice.reducer;