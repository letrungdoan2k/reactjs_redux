import { Link, Outlet } from "react-router-dom";
import Nav_bar from "./layoutAdmin/Nav_bar";
import Header from "./layoutAdmin/Header";
import Footer from "./layoutAdmin/Footer";

function LayoutAdmin() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper__group">
          <Header />
          <div className="wrapper__content">
            <Nav_bar />
            <div className="content__box">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
};
export default LayoutAdmin;