import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createCategory, listCategory, readCategory, removeCategory, updateCategory } from '../../api/categoryAPI';
import { useNavigate } from "react-router-dom";

const initialState = {
    categories: [],
    category:[]
}


export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const { data } = await listCategory();        
        return data
    }
)

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (category) => {
        const { data } = await createCategory(category);
        return data
    }
)

export const editCategory = createAsyncThunk(
    'category/editCategory',
    async (id) => {
        const { data } = await readCategory(id);
        console.log("edit",data)
        return data
    }
)

export const saveEditCategory = createAsyncThunk(
    'category/saveEditCategory',
    async (category) => {
        const { data } = await updateCategory(category);
        return data
    }
)

export const remove = createAsyncThunk(
    'category/remove',
    async (id) => {
        const { data } = await removeCategory(id);
        return id
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload

        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.categories = [...state.categories, action.payload]
        });
        builder.addCase(editCategory.fulfilled, (state, action) => {
            state.category = action.payload
        });
        builder.addCase(saveEditCategory.fulfilled, (state, action) => {
            state.categories = state.categories.map((item) => item.id === action.payload.id ? action.payload : item)
        });
        builder.addCase(remove.fulfilled, (state, action) => {
            console.log("action", action.payload)
            state.categories = state.categories.filter(item => item.id !== action.payload)
        });

        // builder.addCase(fetchCategory.rejected, (state, action) => { });
        // builder.addCase(fetchCategory.pending, (state, action) => { });
    }
});

export default categorySlice;
