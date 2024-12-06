import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    initialProducts: [],
    searchproduct: [],
    isError: false,
    isLoading: true
}

export const fetchProducts = createAsyncThunk('fetchProducts' , async () => {
    const responce = await fetch("https://fakestoreapi.com/products");
    const data = await responce.json();
    return data;
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {data, id} = action.payload;            
            let isAvailable;
            state.cart.forEach((item) => {
                if (item.id === id)
                    isAvailable = true;
            })
            if(isAvailable)
                return;
            state.cart.push(data);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => {
                if(item.id != action.payload)
                    return item;
            })
        },
        quantityHandling: (state, action) => {
            const {id, num} = action.payload;
            state.cart = state.cart.map((item) => {
                if(item.id === id){
                    item.quantity += num;
                    if(item.quantity > 10)
                        item.quantity = 10;
                    return item;
                }
                return item;
            })
        },
        inputHandling: (state, action) => {
            if(!action.payload.trim())
                state.searchproduct = state.initialProducts;
            state.searchproduct = state.initialProducts.filter((item) => {
                if(item.title.toLowerCase().includes(action.payload))
                    return item;
            })         
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled , (state, action) => {
            state.isLoading = false;
            state.initialProducts = action.payload;
        })
        builder.addCase(fetchProducts.rejected , (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const {addToCart, removeFromCart, quantityHandling, inputHandling, getProducts} = cartSlice.actions;

export default cartSlice.reducer;
