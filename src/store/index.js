import { configureStore } from '@reduxjs/toolkit';
import brandSlice from '../slice/admin/brand';
import categorySlice from '../slice/admin/category';
import productSlice from '../slice/admin/product';
import userSlice from '../slice/admin/user';

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        category: categorySlice.reducer,
        brand: brandSlice.reducer,
        user: userSlice.reducer
      },
  });
  
  export default store