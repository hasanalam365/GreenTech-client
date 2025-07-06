import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const limit = 10;

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['products-updated', search, page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products-updated?search=${search}&page=${page}&limit=${limit}`);
            return res.data;
        },
        enabled: !!search || search === '',
    });

    const products = data?.result || [];
    const total = data?.totalCount || 0;
    const totalPages = Math.ceil(total / limit);

    const inputText = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reset to first page on search
        refetch();
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleProductDelete = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/delete-product/${productId}`);
                if (res.data.deletedCount === 1) {
                    toast.success('Product deleted successfully!');
                    refetch();
                } else {
                    toast.error('Failed to delete product.');
                }
            }
        });
    };

    return (
        <div className="flex flex-col px-4 md:p-8 bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full">
            <Helmet>
                <title>All Products | Admin | Green Tech</title>
            </Helmet>

            <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold">
                    Total Products: <span>{total}</span>
                </h4>
                <input
                    onChange={inputText}
                    value={search}
                    className="input input-bordered join-item"
                    placeholder="Search by product ID"
                />
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                    <span className="ml-4 text-green-600 font-semibold">Loading...</span>
                </div>
            ) : products.length === 0 ? (
                <span className="flex items-center justify-center mt-5">No product found!</span>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Details</th>
                                    <th>Product Id</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={product.imgUrl} alt="product" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product.title}</div>
                                                    <div className="text-sm opacity-50">${product.price}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.productId}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <button className="btn btn-xs">
                                                <MdEditSquare className="text-green-600 text-xl hover:scale-110" />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleProductDelete(product.productId)}
                                                className="btn btn-ghost btn-xs"
                                            >
                                                <MdDeleteForever className="text-red-600 text-xl hover:scale-110" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-4 gap-2 flex-wrap">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="btn btn-sm"
                            disabled={page === 1}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`btn btn-sm ${page === i + 1 ? 'btn-active bg-green-600 text-white' : ''}`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="btn btn-sm"
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllProducts;
