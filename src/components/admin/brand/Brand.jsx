import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { fetchBrand, remove } from '../../../slice/admin/brand';
// import { submit } from "../Confirm";

const Brand = () => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand.brands)

    useEffect(() => {
        dispatch(fetchBrand());
    }, [])
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Danh sách thương hiệu</h3>
            <Link to="add" className="content__box-add">Thêm thương hiệu</Link>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên thương hiệu</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>

                <tbody>
                    {brands && brands.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                                    <button className="remove_button" onClick={() => dispatch(remove(item.id))}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Brand;