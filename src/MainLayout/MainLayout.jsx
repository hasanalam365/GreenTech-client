import { Link, Outlet, useLocation } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import 'animate.css/animate.css'

import CheckOutBOxCart from "../Shared/CheckOutBOxCart";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MainLayout = () => {

    const [openCart, setOpenCart] = useState(false)
    const axiosPublic = useAxiosPublic()

    const [search, setSearch] = useState('')

    const { data: allProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['allProducts-Search', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-products?search=${search}`)
            return res.data
        },
        enabled: search !== '',
    })

    const handleSearchOff = () => {
        setSearch('')
    }

    return (
        <div
            className="min-h-screen relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.ibb.co/FhQC8JK/green-tech-bg.jpg')" }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e7f7ec]/90 to-white/90 backdrop-blur-sm pointer-events-none"></div>

            {/* Content Wrapper */}
            <div className="relative container mx-auto px-4">
                <div>
                    <Navber setOpenCart={setOpenCart} openCart={openCart} setSearch={setSearch} />
                </div>

                <div>
                    {allProducts.length > 0 &&
                        <div className="overflow-x-auto fixed top-16 z-50 bg-gray-300 bg-opacity-90 h-full rounded-md shadow-lg">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Photo</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProducts.map((product, idx) => (
                                        <tr key={product._id}>
                                            <th>{idx + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={product.imgUrl} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.title}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <Link to={`/product/${product._id}`} onClick={handleSearchOff}>View</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>

                <div>
                    {openCart && <CheckOutBOxCart setOpenCart={setOpenCart} openCart={openCart} />}
                </div>

                <div className="min-h-[calc(100vh-334px)]">
                    <Outlet />
                </div>

                <div className="h-[268px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
