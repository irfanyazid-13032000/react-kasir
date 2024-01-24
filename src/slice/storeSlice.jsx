import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStore = createAsyncThunk('carts/fetchStore', async () => {
  const response = await axios.get('http://localhost:8088/store');
  return response.data;
});


const storeSlice = createSlice({
  name:"stores",
  initialState:{
    data:[]
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchStore.fulfilled,(state,action)=>{
      state.data = action.payload
    })
  }
})


export const selectStores = (state) => state.stores.data

export default storeSlice.reducer