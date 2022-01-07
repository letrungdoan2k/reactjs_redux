import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./components/admin/AdminHome";
import Brand from "./components/admin/brand/Brand";
import AddCategory from "./components/admin/category/AddCategory";
import Category from "./components/admin/category/Categories";
import EditCategory from "./components/admin/category/EditCategory";
import Dashboard from "./components/admin/Dashboard";
import AddProduct from "./components/admin/product/AddProduct";
// import EditProduct from "./components/admin/product/EditProduct";
import Product from "./components/admin/product/Products";
import PrivateAdmin from "./components/PrivateAdmin";
import LayoutAdmin from "./layout/LayoutAdmin";

function App() {
  return (

    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        {/* {JSON.stringify(products)} */}
        <Routes>
          {/* <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Home />} />
            <Route path="product" element={<ProductsWebsite />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="product/search" element={<Search />} />

            <Route path="category/:id" element={<ProductCategory />} />
            <Route path="introduce" element={<div>introduce</div>} />
            <Route path="contact" element={<Contact />} />

            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route> */}

          <Route path="admin/" element={<PrivateAdmin> <LayoutAdmin /> </PrivateAdmin>}>
            <Route index element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />

            <Route path="category" element={<Category />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="category/:id/edit" element={<EditCategory />} />

            <Route path="brand" element={<Brand />} />
            {/* <Route path="brand/add" element={<AddBrand />} />
            <Route path="brand/:id/edit" element={<EditBrand />} /> */}

            {/* <Route path="slide_show" element={<Slide_show />} /> */}


            {/* <Route path="users" element={<Users />} /> */}
            <Route path="demo" element={<AdminHome />} />



            {/* <Route path="comments" element={<Comments />} /> */}


            <Route path="product" element={<Product />} />
            {/* <Route path="product/add" element={<AddProduct />} /> */}
            {/* <Route path="product/:id/edit" element={<EditProduct />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
