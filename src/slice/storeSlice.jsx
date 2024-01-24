import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStore = createAsyncThunk('stores/fetchStore', async () => {
  const response = await axios.get('http://localhost:8088/store');
  return response.data;
});

export const addStore = createAsyncThunk('stores/addStore',async (newStore,{dispatch}) => {
  const response = await axios.post('http://localhost:8088/store/v2',{
    noSiup:newStore.noSiup,
    name:newStore.storeName,
    address:newStore.address,
    mobilePhone:newStore.phone
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response)=>{
    console.log(response);
  }).catch((err)=> {
    console.log(err);
  })

  dispatch(fetchStore())
  return response.data
})


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