import { Link } from "react-router-dom";

const CateProduct = (props) => {
  return (
    <div>
      <div className="app__container">
        <div className="grid wide">
          <div className="row sm-gutter app__content">
            <div className="col l-2 m-0 c-0">
              <nav className="category">
                <h3 className="category-heading">Danh mục</h3>
                <ul className="category-list">
                  {/* category-item-active => active */}
                  {props.category && props.category.map((item, index) => {
                    return (
                      <li className="category-item category-item-active" key={index}>
                        <Link to={`${item.id}`} className="category-item__link">{item.name}</Link>
                      </li>
                    )
                  })}
                  <li className="category-item">
                    <a className="category-item__link" href="#">Laptop</a>
                  </li>
                  <li className="category-item">
                    <a className="category-item__link" href="#">Điện thoại</a>
                  </li>
                  <li className="category-item">
                    <a className="category-item__link" href="#">Tai nghe</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col l-10 m-12 c-12">
              <div className="home-filter hide-on-mobile-tablet">
                <div className="home-filter-left">
                  <span className="home-filter__label">Sắp sếp theo</span>
                  <button className="home-filter__btn btn">Phổ biến</button>
                  <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                  <button className="home-filter__btn btn">Bán chạy</button>
                  <div className="select-input ">
                    <span className="select-input__label">Giá</span>
                    <i className="select-input__icon fas fa-chevron-down" />
                    <ul className="select-input__list">
                      <li className="select-input__item">
                        <a href className="select-input__link">Giá: thấp đến cao</a>
                      </li>
                      <li className="select-input__item">
                        <a href className="select-input__link">Giá: cao đến thấp</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="home-filter-right">
                  <span className="home-filter__page">
                    <span className="home-filter__page-current">1</span>
                    /14
                  </span>
                  <div className="home-filter__page-control">
                    <a href="#" className="home-filter__page-btn home-filter__page-btn--disabled">
                      <i className="home-filter__page-icon fas fa-chevron-left" />
                    </a>
                    <a href="#" className="home-filter__page-btn">
                      <i className="home-filter__page-icon fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <nav className="mobile-category">
                <ul className="mobile-category__list">
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">Dung cu &amp; thiet bi tien ich</a>
                  </li>
                </ul>
              </nav>
              <div className="home-product">
                <div className="row sm-gutter">
                  {props.products && props.products.map((item, index) => {
                    return (
                      <div className="col l-2-4  c-6" key={index}>
                        <Link to={`${item.id}`} className="home-product-item">
                          <div className="home-product-item__img" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                          </div>
                          <h4 className="home-product-item__name">{item.name}</h4>
                          <div className="home-product-item__price">
                            <del className="home-product-item__price-old">{item.price}</del>
                            <span className="home-product-item__price-current">{item.sale}</span>
                          </div>
                          <div className="home-product-item__action">
                            <span className="home-product-item__like">
                              <i className="home-product-item__like-icon-empty far fa-heart" />
                              <i className="home-product-item__like-icon-fill fas fa-heart" />
                            </span>
                            <div className="home-product-item__rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                              <i className="far fa-star" />
                            </div>
                            <span className="home-product-item__sold">
                              Đã bán 100
                            </span>
                          </div>
                          <div className="home-product-item__origin">
                            <span className="home-product-item__brand">{item.brand_id}</span>
                            <span className="home-product-item__origin-name">Nhật bản</span>
                          </div>
                          <div className="home-product-item__favourite">
                            <i className="fas fa-check" />
                            <span>Yêu thích</span>
                          </div>
                          <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-percent">{item.sale}%</span>
                            <span className="home-product-item__sale-off-label">GIẢM</span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <ul className="paginayion home-product__paginayion">
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">
                    <i className="paginayion-item__icon fas fa-chevron-left" />
                  </a>
                </li>
                <li className="paginayion-item paginayion-item--active">
                  <a href className="paginayion-item__link">1</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">2</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">3</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">4</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">5</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">...</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">14</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">
                    <i className="paginayion-item__icon fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CateProduct;
