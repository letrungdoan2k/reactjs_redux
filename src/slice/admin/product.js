import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createProduct, listProduct, removeProduct } from '../../api/productAPI';

//
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
// import { useNavigate } from "react-router";
// import { storage } from "../../../firebase/firebase.config";
// import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from '@firebase/storage';
// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
//
const initialState = {
    products: []
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ({limit}) => {
       const {data} = await listProduct();
       return data
    }
)

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product) => {
        // console.log(data)
        // let image = data.image[0];
        // const storageRef = ref(storage, `image/${image.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, image);
        // console.log(uploadTask)
        // uploadBytes(storageRef, image).then(() => {
        //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //         console.log(downloadURL);
        //         const newData = { ...data, image: downloadURL }
        //         createProduct(newData).then((response) => {
        //             console.log(response)
        //             if (response.data.success != false) {
        //                 toast.success("Thêm thành công")
        //                 navigate("/admin/product", { replace: true })
        //                 onAdd(newData)
        //             } else {
        //                 const err = response.data.errors
        //                 setError(err)
        //             }
        //         });

        //     })
        // })
       const {data} = await createProduct(product);
       return data
    }
)

export const remove = createAsyncThunk(
    'product/remove',
    async (id) => {
       const {data} = await removeProduct(id);
       return id
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products = [...state.products, action.payload]
        });
        builder.addCase(remove.fulfilled, (state, action) => {
            console.log("action", action.payload)
            state.products = state.products.filter(item => item.id !== action.payload)
        });

        // builder.addCase(fetchProduct.rejected, (state, action) => { });
        // builder.addCase(fetchProduct.pending, (state, action) => { });
    }
});

export default productSlice;
