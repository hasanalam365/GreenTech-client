import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import '@smastrom/react-rating/style.css';
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useRandomProductShow from "../hooks/useRandomProductShow";
import { Helmet } from "react-helmet-async";
import ServiceSection from "../Pages/Home/ServiceSection";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const productData = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const { imgUrl, title, price, rating, features, _id, category, description } = productData;
  const [randomProductsData, isRelatedLoading] = useRandomProductShow(category);

  const { data: wishlistCheck, refetch } = useQuery({
    queryKey: ['wishlist-check', _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/check/${_id}/${user?.email}`);
      return res.data;
    }
  });

  useEffect(() => { refetch(); }, [refetch]);

  const handleWishlistAdd = async () => {
    if (user?.email) {
      const res = await axiosSecure.put('/wishlist', {
        email: user.email,
        productId: _id,
        product: productData,
        quantity
      });
      if (res.data.upsertedCount) toast('added to wishlist');
      refetch();
    } else {
      Swal.fire({ title: "Not Logged In", text: "Please login", icon: "warning" })
        .then((res) => res.isConfirmed && navigate('/login', { state: location.pathname }));
    }
  };

  const handleWishlistRemove = async () => {
    const res = await axiosPublic.delete(`/wishlist/remove/${_id}/${user?.email}`);
    if (res.data.deletedCount) toast.warning('Removed from wishlist');
    refetch();
  };

  const handleAddtoCart = async () => {
    if (user?.email) {
      await axiosSecure.post('/addToCart', { email: user.email, productId: _id, productData, quantity });
      toast('Added to cart');
    } else {
      Swal.fire({ title: "Not Logged In", text: "Please login", icon: "warning" })
        .then((res) => res.isConfirmed && navigate('/login', { state: location.pathname }));
    }
  };

  const handleBuyAddtoCart = async () => {
    if (user?.email) {
      await axiosSecure.post('/addToCart', { email: user.email, productId: _id, productData, quantity });
      navigate('/dashboard/checkout');
    } else {
      Swal.fire({ title: "Not Logged In", text: "Please login", icon: "warning" })
        .then((res) => res.isConfirmed && navigate('/login', { state: location.pathname }));
    }
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDiscrease = () => quantity > 1 && setQuantity(quantity - 1);
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 ">
      <Helmet><title>{title} | {category} | Green Tech</title></Helmet>
      <div className="bg-base-200 p-8 pt-20">
        <motion.div className="flex flex-col lg:flex-row gap-5" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex-1">
            <motion.img src={imgUrl} alt={title} className="rounded-lg shadow-2xl w-full h-[250px] md:h-[320px] lg:h-[380px]" whileHover={{ scale: 1.02 }} />
          </div>
          <div className="flex-1 space-y-2 p-2">
            <motion.h1 className="text-5xl font-bold" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}>{title}</motion.h1>
            <p className="font-medium">Price: <span className="text-[#FF5722]">${price}</span></p>
            <div>
              <h5 className="font-medium">Features:</h5>
              <ul>{features?.map((f, i) => <li key={i} className="list-disc ml-8">{f}</li>)}</ul>
            </div>
            <div className="flex gap-8 items-center">
              <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
              {wishlistCheck ? (
                <button onClick={handleWishlistRemove}><FaHeart className="text-[#FF5722] text-xl" /></button>
              ) : (
                <button onClick={handleWishlistAdd}><FaRegHeart className="text-[#FF5722] text-xl" /></button>
              )}
              <div className="flex items-center">
                <button onClick={handleDiscrease} className="btn btn-sm bg-[#FF5722] text-white">-</button>
                <input value={quantity} readOnly className="w-[60px] p-[2px] text-center" />
                <button onClick={handleIncrease} className="btn btn-sm bg-[#F29120] text-white">+</button>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button onClick={handleAddtoCart} className="btn bg-[#F29120] hover:bg-[#d68324] text-white mt-3">Add to Cart</button>
              <button onClick={handleBuyAddtoCart} className="btn bg-[#FF5722] hover:bg-[#ec5527] text-white mt-3">Buy Now</button>
            </div>
          </div>
        </motion.div>

        {description && <p className="mt-4 font-medium">Description: {description}</p>}

        <div className="bg-base-200 pt-10">
          <h2 className="text-3xl font-bold mb-4">Related Products</h2>
          <div className="divider"></div>
          {isRelatedLoading || !randomProductsData ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {shuffleArray(randomProductsData).map((product) => (
                <motion.div key={product._id} variants={cardVariants} whileHover={{ scale: 1.05 }}>
                  <Link to={`/product/${product._id}`} className="card card-compact bg-base-100 shadow-xl mt-5">
                    <figure>
                      <img className='w-full h-[150px] hover:scale-110 transition-transform duration-300' src={product.imgUrl} alt={product.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-lg font-medium">{product.title}</h2>
                      <p className="font-medium">$<span>{product.price}</span></p>
                      <div className="flex justify-between">
                        <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
                        <FaArrowRight className="text-lg text-orange-600 hover:text-xl" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <ServiceSection />
    </div>
  );
};

export default ProductDetail;
