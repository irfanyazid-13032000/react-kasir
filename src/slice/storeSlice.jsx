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


export const deleteStore = createAsyncThunk('stores/deleteStore',async (storeId,{dispatch})=>{
  await axios.delete('http://localhost:8088/store/'+storeId)
  dispatch(fetchStore())
})

export const getByIdStore = createAsyncThunk('stores/getByIdStore',async(storeId)=>{
  const response = await axios.get('http://localhost:8088/store/'+storeId)
  return response.data
})


export const editStore = createAsyncThunk('stores/editStore',async (editedStore,{dispatch})=>{
  console.log(editedStore)
  await axios.put('http://localhost:8088/store',{
    id:editedStore.id,
    noSiup:editedStore.noSiup,
    name:editedStore.storeName,
    address:editedStore.address,
    mobilePhone:editedStore.phone
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((result)=>{
    console.log(result)
    dispatch(fetchStore())
  })
  .catch((err)=>console.log(err))
})


const storeSlice = createSlice({
  name:"stores",
  initialState:{
    data:[],
    selectedStore:{}
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchStore.fulfilled,(state,action)=>{
      state.data = action.payload
    })
    .addCase(getByIdStore.fulfilled,(state,action)=>{
      state.selectedStore = action.payload
      console.log(state.selectedStore);
    })
    .addCase(editStore.fulfilled,(state)=>{
      state.selectedStore = {}
    })
  }
})


export const selectStores = (state) => state.stores.data

export default storeSlice.reducer