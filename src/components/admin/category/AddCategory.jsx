import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { addCategory } from "../../../slice/admin/category";
import { toast } from 'react-toastify';

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: 'all' });
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(addCategory(data))
        toast.success("Thêm thành công")
        navigate("/admin/category", { replace: true })
    };

    const AddCategoryForm = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Thêm danh muc</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên danh muc :</label>
                    <input type="text" placeholder="Tên danh mục" className="input-txt" {...register('name', { required: "Bạn chưa nhập tên danh mục", maxLength: { value: 255, message: "Tên quá dài" } })} />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                    {/* {error.name && <p style={{ color: 'red' }}>{error.name}</p>} */}
                </div>
                <div className="content__box-product-add-btn">
                    <button className="content__box-product-btn" name="btnSend">Thêm danh mục</button>
                </div>
            </form>
        );
    };

    return (
        <div><AddCategoryForm /></div>
    );
};
export default AddCategory;