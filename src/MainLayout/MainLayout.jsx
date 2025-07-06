import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import 'animate.css/animate.css';

import CheckOutBOxCart from "../Shared/CheckOutBOxCart";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MainLayout = () => {
  const [openCart, setOpenCart] = useState(false);
  const axiosPublic = useAxiosPublic();

  const [search, setSearch] = useState("");

  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts-Search", search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-products?search=${search}`);
      return res.data;
    },
    enabled: search !== "",
  });

  const handleSearchOff = () => {
    setSearch("");
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#D8F1EE] via-[#D7EFED] to-[#D9F1EF] overflow-x-hidden"
      style={{}}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7f7ec]/90 to-white/90 backdrop-blur-sm pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar setOpenCart={setOpenCart} openCart={openCart} setSearch={setSearch} />

        {/* Search result dropdown */}
        {allProducts.length > 0 && (
          <div className="fixed top-[64px] left-1/2 transform -translate-x-1/2 z-50 bg-gray-300 bg-opacity-90 rounded-md shadow-lg max-w-screen-md w-[90vw] overflow-x-auto">
            <table className="table table-zebra w-full min-w-[500px]">
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
                          <img
                            src={product.imgUrl}
                            alt="Product"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <Link to={`/product/${product._id}`} onClick={handleSearchOff}>
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {openCart && <CheckOutBOxCart setOpenCart={setOpenCart} openCart={openCart} />}

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
