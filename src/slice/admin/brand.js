import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createBrand, listBrand, removeBrand } from '../../api/brandAPI';

const initialState = {
    brands: []
}

export const fetchBrand = createAsyncThunk(
    'brand/fetchBrand',
    async () => {
       const {data} = await listBrand();
       return data
    }
)

export const addBrand = createAsyncThunk(
    'brand/addbrand',
    async (brand) => {
       const {data} = await createBrand(brand);
       return data
    }
)

export const remove = createAsyncThunk(
    'brand/remove',
    async (id) => {
       const {data} = await removeBrand(id);
       return id
    }
)

const brandSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBrand.fulfilled, (state, action) => {
            state.brands = action.payload
        });
        builder.addCase(addBrand.fulfilled, (state, action) => {
            state.brands = [...state.brands, action.payload]
        });
        builder.addCase(remove.fulfilled, (state, action) => {
            console.log("action", action.payload)
            state.brands = state.brands.filter(item => item.id !== action.payload)
        });

        // builder.addCase(fetchProduct.rejected, (state, action) => { });
        // builder.addCase(fetchProduct.pending, (state, action) => { });
    }
});

export default brandSlice;
