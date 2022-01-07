import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div className="wrapper__nav">
            <div className="nav__header">
                <a href className="nav__header-link">
                    <img src="https://png.pngtree.com/png-vector/20190301/ourlarge/pngtree-vector-administration-icon-png-image_747092.jpg" alt="" className="nav__header-img" />
                </a>
                <span className="nav__header-author">Admin</span>
            </div>
            <div className="nav__name">
                <h1 className="nav__name-header">Danh mục</h1>
            </div>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="Dashboard" className="nav__link">
                        <i className="fas fa-home" />
                        <span className="nav__link-txt">Thống kê</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="category" className="nav__link">
                        <i className="fas fa-sitemap" />
                        <span className="nav__link-txt">Danh mục sp</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="product" className="nav__link">
                        <i className="fas fa-shopping-bag" />
                        <span className="nav__link-txt">Sản phẩm</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="brand" className="nav__link">
                        <i className="fas fa-gem" />
                        <span className="nav__link-txt">Thương hiệu</span>
                    </Link>
                </li>
                {/* <li className="nav__item">
                    <Link to="slide_show" className="nav__link">
                        <i className="fas fa-images" />
                        <span className="nav__link-txt">Slide show</span>
                    </Link>
                </li> */}
                <li className="nav__item">
                    <Link to="users" className="nav__link">
                        <i className="fas fa-users" />
                        <span className="nav__link-txt">User</span>
                    </Link>
                </li>
                {/* <li className="nav__item">
                    <Link to="comments" className="nav__link">
                        <i className="fas fa-comments" />
                        <span className="nav__link-txt">Comment</span>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
};
export default Header;