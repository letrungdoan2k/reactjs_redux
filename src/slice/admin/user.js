import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, listUser, removeUser } from '../../api/userAPI';
//
const initialState = {
    users: []
}

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
       const {data} = await listUser();
       return data
    }
)

export const addUser = createAsyncThunk(
    'user/addUser',
    async (user) => {
       const {data} = await createUser(user);
       return data
    }
)

export const remove = createAsyncThunk(
    'user/remove',
    async (id) => {
       const {data} = await removeUser(id);
       return id
    }
)

const userSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.users = [...state.users, action.payload]
        });
        builder.addCase(remove.fulfilled, (state, action) => {
            console.log("action", action.payload)
            state.users = state.users.filter(item => item.id !== action.payload)
        });

        // builder.addCase(fetchProduct.rejected, (state, action) => { });
        // builder.addCase(fetchProduct.pending, (state, action) => { });
    }
});

export default userSlice;
