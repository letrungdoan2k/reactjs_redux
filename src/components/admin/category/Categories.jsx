import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { fetchCategory, remove } from '../../../slice/admin/category';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category.categories)
  const submit = (id, name) => {
    confirmAlert({
      title: 'Bạn muốn xóa',
      message: name,
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(remove(id))
        },
        {
          label: 'No',
          onClick: () => "hủy"
        }
      ]
    });
  };

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  return (
    <div className="content__box-product ">
      <h3 className="content__box-header">Các danh mục</h3>
      <Link to="add" className="content__box-add">Thêm danh mục</Link>
      <table className="content__box-product-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên danh mục</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {category && category.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                  <button className="remove_button" onClick={() => submit(item.id, item.name)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Category;