import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
  const response = await axios.get('http://localhost:3000/keranjangs');
  return response.data;
});


export const addToCart = createAsyncThunk('carts/addToCart', async (newCartItem, { dispatch, getState }) => {
  try {
    const state = getState();
    const existingCartItem = state.carts.data.find(item => item.product.id == newCartItem.id);

    if (existingCartItem) {
      // Product already exists in the cart, update the quantity and total price
      const updatedCartItem = {
        ...existingCartItem,
        jumlah: existingCartItem.jumlah + 1,
        total_harga: (existingCartItem.jumlah + 1) * newCartItem.harga
      };

      // Use PUT or PATCH request to update the existing item in the cart
      const response = await axios.put(`http://localhost:3000/keranjangs/${existingCartItem.id}`, updatedCartItem);
      dispatch(fetchCarts());
      return response.data;
    } else {
      // Product does not exist in the cart, add it as a new item
      const response = await axios.post('http://localhost:3000/keranjangs', {
        jumlah: 1,
        total_harga: newCartItem.harga * 1,
        product: newCartItem
      });
      dispatch(fetchCarts());
      return response.data;
    }
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be handled by the rejected case
  }
});


export const removeCart = createAsyncThunk('carts/removeCart', async (product, { dispatch }) => {
  try {
    await axios.delete(`http://localhost:3000/keranjangs/${product.id}`);
    dispatch(fetchCarts());
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be handled by the rejected case
  }
});

export const updateCart = createAsyncThunk('carts/updateCart',async(product,{dispatch})=>{
  try {
    // const state = getState();
    // const sameProduct = state.carts.data.find(item => item.product.id == product.id);
    // console.log(sameProduct);
    console.log(product);
    await axios.put(`http://localhost:3000/keranjangs/${product.id}`, product);
    dispatch(fetchCarts());
  } catch (error) {
    console.error(error);
  }
})



// export const removeCart = createAsyncThunk('carts/removeCart',async ())


const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    data: [],
    loading: false,
    error: null,
    total_shopping:0,
    showModal : false,
    selectedInModal:{},
    total_qty:0,
    priceBeforeChanged:0
  },
  reducers: {
    updateTotalShopping: (state, action) => {
      state.total_shopping += action.payload.harga;
    },
    updateTotalShoppingFromModal:(state,action) => {
      state.total_shopping = state.total_shopping - state.priceBeforeChanged + action.payload.total_harga
      // console.log(state.total_shopping);
    },
    deletePriceWhenRemoveItem:(state,action) => {
      state.total_shopping = state.total_shopping - action.payload.total_harga
    },
    openModal : (state,action) => {
      // console.log(action.payload);
      state.showModal = true
      state.selectedInModal = action.payload
    },
    closeModal:(state) => {
      state.showModal = false
    },
    setPriceBeforeChanged:(state,action) => {
      state.priceBeforeChanged = action.payload.total_harga
      // console.log(state.priceBeforeChanged);
    }
  },
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
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeCart.rejected, (state, action) => {
        state.loading = false;
        console.error(action.error);
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        // console.error(action.error);
      })
      .addCase(updateCart.fulfilled, (state) => {
        state.loading = false;
        // console.error(action.error);
      })
      .addCase(updateCart.rejected, (state,action) => {
        state.loading = false;
        console.error(action.error);
      })
    }
  })

  export const { updateTotalShopping,openModal,closeModal,setPriceBeforeChanged,updateTotalShoppingFromModal,deletePriceWhenRemoveItem } = cartsSlice.actions;


  export const selectCarts = (state) => state.carts.data;
  export const selectCartsLoading = (state) => state.carts.loading;
  export const selectCartsError = (state) => state.carts.error;

  export default cartsSlice.reducer;