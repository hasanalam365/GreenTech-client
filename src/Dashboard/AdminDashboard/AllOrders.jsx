import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AllOrders = () => {

    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('')

    const { data: allOrders = [], refetch, isLoading } = useQuery({
        queryKey: ['all-orders', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-orders?search=${search}`);
            return res.data;
        },
        enabled: !!search || search === '',
    })


    const handleOrderDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this orders!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/order-delete/${id}`)

                if (res.data.deletedCount === 1) {
                    toast('Order has been deleted')
                    refetch()
                }

            }
        });


    }

    //handleChange
    const inputText = (e) => {
        setSearch(e.target.value)

    }


    return (
        <div className="flex flex-col px-4 md:p-8 bg-gradient-to-r from-green-50 via-green-100 to-green-50  h-full">
            <Helmet>
                <title>All Orders | Admin | Green Tech </title>
            </Helmet>
            <div className="flex items-center justify-between mb-2">

                <h4 className="text-lg font-semibold">Total Orders: <span>{allOrders.length}</span></h4>
                <div className="join mr-5">
                    <div>

                        <input onChange={inputText} className="input input-bordered join-item " placeholder="Search by order id" />

                    </div>

                </div>
            </div>
            {isLoading ?  <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <span className="ml-4 text-green-600 font-semibold">Loading...</span>
            </div> : allOrders.length === 0 ? <span className="flex items-center justify-center mt-5">No order found!</span> : <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, idx) =>
                                <tr key={idx}>
                                    <td>{order.name}</td>
                                    <td>{order.orderId}</td>
                                    <td>{order.time}
                                        <span> {order.date}</span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/view-order/${order._id}`} className="bg-green-600 p-1 text-white rounded-lg hover:text-orange-600">
                                            pending
                                        </Link>

                                    </td>

                                    <td>
                                        <button onClick={() => handleOrderDelete(order._id)} className="btn btn-ghost btn-xs text-white bg-red-600 ">Delete</button>
                                    </td>

                                </tr>)
                        }

                    </tbody>

                </table>
            </div>}
        </div>
    );
};

export default AllOrders;