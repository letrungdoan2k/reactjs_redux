import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { fetchProduct, remove } from '../../../slice/admin/product';
// import { submit } from "../../../pages/admin/Confirm";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products)
  const categories = useSelector(state => state.category.categories)
  const brands = useSelector(state => state.brand.brands)

  useEffect(() => {
    dispatch(fetchProduct({limit: 6}));
  }, [])
  return (
    <div>
      <div className="content__box-product ">
        <h3 className="content__box-header">Danh sách sản phẩm</h3>
        <Link to="add" className="content__box-add">Thêm sản phẩm</Link>
        <table className="content__box-product-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Ảnh</th>
              <th>Giá sản phẩm</th>
              <th>Giá Sale</th>
              <th>Số lượng</th>
              <th>Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {products && products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{
                    categories.map((cate, index) => {
                      if (cate.id == item.cate_id) {
                        return cate.name;
                      }
                    })                    
                  }</td>
                  <td>{
                    brands.map((brand, index) => {
                      if (brand.id == item.brand_id) {
                        return brand.name;
                      }
                    })
                  }</td>
                  <td className="td-img">
                    <img src={item.image} alt="" with={80} />
                    {/* <img src={"http://localhost:8000/storage/"+item.image } alt="" with={80}/> */}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.price_sale}</td>
                  <td>{item.quantity}</td>
                  <td className="td-function">
                    <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                    <button className="remove_button" onClick={() => dispatch(remove(item.id))}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Product;