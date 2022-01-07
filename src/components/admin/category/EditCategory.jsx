import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editCategory, saveEditCategory } from "../../../slice/admin/category";

const EditCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category)
    //
    

    console.log("abcc", category)
    const { id } = useParams();
    //
    useEffect(() => {
        dispatch(editCategory(id))
    }, [id]);

    const onSubmit = (data) => {
        dispatch(saveEditCategory(id, data))
        toast.success("Sửa thành công")
        navigate("/admin/category", { replace: (true) });
    };

    const EditCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Sửa danh mục</h3>
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
                <div className="content__box-product-add-btn" style={{ width: '552px' }}>
                    <button type='submit' className="content__box-product-btn">Sửa danh mục</button>
                    <button type='button' className="remove_button" onClick={() => navigate(-1)}>Quay lai</button>
                </div>
            </form>
        );
    };

    return (
        <div><EditCategoryForm /></div>
    );
};
export default EditCategory;