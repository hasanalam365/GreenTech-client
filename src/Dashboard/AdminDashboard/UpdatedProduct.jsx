import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UpdatedProduct = () => {
    const productData = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: productData.title,
        category: productData.category,
        price: productData.price,
        stock: productData.stock,
        description: productData.description,
        imgUrl: productData.imgUrl,
        features: [...productData.features], // ⬅️ Add features
    });

    // Handle basic field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle feature text change
    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...formData.features];
        updatedFeatures[index] = value;
        setFormData((prev) => ({ ...prev, features: updatedFeatures }));
    };

    // Add a new empty feature
    const handleAddFeature = () => {
        setFormData((prev) => ({
            ...prev,
            features: [...prev.features, ''],
        }));
    };

    // Remove a feature
    const handleRemoveFeature = (index) => {
        const updatedFeatures = formData.features.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, features: updatedFeatures }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axiosSecure.put(`/update-product/${productData.productId}`, formData);
        if (res.data.modifiedCount === 1) {
            toast.success("Product updated successfully!");
            navigate('/dashboard/all-products');
        } else {
            toast.error("Failed to update product!");
        }
    };

    return (
        <div className='px-4 md:p-8 bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full'>
            <Helmet>
                <title>Update Product | Green Tech</title>
            </Helmet>

            <h2 className='text-2xl font-semibold mb-6 text-center'>Update Product</h2>

            <form onSubmit={handleSubmit} className='space-y-5 max-w-2xl mx-auto'>
                {/* Basic fields */}
                <div>
                    <label className='label'>Product Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className='input input-bordered w-full'
                        required
                    />
                </div>

                <div>
                    <label className='label'>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className='input input-bordered w-full'
                        required
                    />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label className='label'>Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className='input input-bordered w-full'
                            required
                        />
                    </div>
                    <div>
                        <label className='label'>Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className='input input-bordered w-full'
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className='label'>Image URL</label>
                    <input
                        type="text"
                        name="imgUrl"
                        value={formData.imgUrl}
                        onChange={handleChange}
                        className='input input-bordered w-full'
                    />
                </div>

                <div>
                    <label className='label'>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className='textarea textarea-bordered w-full'
                        rows="4"
                    ></textarea>
                </div>

                {/* ✅ Features Section */}
                <div>
                    <label className='label'>Features</label>
                    {formData.features.map((feature, index) => (
                        <div key={index} className='flex gap-2 mb-2'>
                            <input
                                type="text"
                                value={feature}
                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                className='input input-bordered w-full'
                                required
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveFeature(index)}
                                className='btn btn-error btn-xs'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddFeature}
                        className='btn btn-success btn-sm mt-2'
                    >
                        + Add Feature
                    </button>
                </div>

                <button
                    type="submit"
                    className='btn btn-success w-full'
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdatedProduct;
