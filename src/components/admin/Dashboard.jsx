import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../slice/admin/brand";
import { fetchCategory } from "../../slice/admin/category";
import { fetchProduct } from "../../slice/admin/product";
import { fetchUser } from "../../slice/admin/user";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products)
  const categories = useSelector(state => state.category.categories)
  const brands = useSelector(state => state.brand.brands)
  const users = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
    dispatch(fetchBrand());
    dispatch(fetchUser());
  }, [])
  return (
    <div className="content__box-product ">
      <h3 className="content__box-header">Thống kê</h3>
      <div className="row col row-2">
        {
          categories && <div className="l-3 box-represent">
            <i className="fas fa-sitemap icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Danh mục SP</span>
              <span className="content__box-count">
                {categories.length}
              </span>
            </div>
          </div>
        }
        {
        products && <div className="l-3 box-represent">
          <i className="fas fa-shopping-bag icon-represent" />
          <div className="content__box-text">
            <span className="content__box-title">Số sản phẩm</span>
            <span className="content__box-count">
              {products.length}
            </span>
          </div>
        </div>
        }
        {
          brands && <div className="l-3 box-represent">
          <i className="fas fa-gem icon-represent" />
          <div className="content__box-text">
            <span className="content__box-title">Số thương hiệu</span>
            <span className="content__box-count">
              {brands.length}
            </span>
          </div>
        </div>
        }
        {
          users && <div className="l-3 col box-represent">
          <i className="fas fa-users icon-represent" />
          <div className="content__box-text">
            <span className="content__box-title">Tài khoản User</span>
            <span className="content__box-count">
              {users.length}
            </span>
          </div>
        </div>
        }
      </div>
    </div>
  );
};
export default Dashboard;