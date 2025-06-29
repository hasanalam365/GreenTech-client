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

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleWishlistAdd = async (productData) => {
    if (user && user.email) {
      const wishlistAddInfo = {
        email: user?.email,
        productId: productData._id,
        product: productData,
        quantity
      };
      const res = await axiosSecure.put('/wishlist', wishlistAddInfo);
      if (res.data.upsertedCount === 1) {
        toast('added to wishlist');
        refetch();
      }
    } else {
      Swal.fire({
        title: "You are not Logged In!!",
        text: "Please login after adding to the wishlist",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: location?.pathname });
        }
      });
    }
  };

  const handleWishlistRemove = async (id) => {
    const res = await axiosPublic.delete(`/wishlist/remove/${id}/${user?.email}`);
    if (res.data.deletedCount === 1) {
      toast.warning('Removed from wishlist');
      refetch();
    }
  };

  const handleAddtoCart = async (productData) => {
    if (user && user.email) {
      const addCartInfo = {
        email: user?.email,
        productId: productData._id,
        productData,
        quantity
      };
      const res = await axiosSecure.post('/addToCart', addCartInfo);
      toast('Added to cart');
      refetch();
    } else {
      Swal.fire({
        title: "You are not Logged In!!",
        text: "Please login after adding to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: location?.pathname });
        }
      });
    }
  };

  const handleBuyAddtoCart = async (productData) => {
    if (user && user.email) {
      const addCartInfo = {
        email: user?.email,
        productId: productData._id,
        productData,
        quantity
      };
      await axiosSecure.post('/addToCart', addCartInfo);
      navigate('/dashboard/checkout');
    } else {
      Swal.fire({
        title: "You are not Logged In!!",
        text: "Please login before checkout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: location?.pathname });
        }
      });
    }
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDiscrease = () => quantity > 1 && setQuantity(quantity - 1);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <Helmet>
        <title>{title} | {category} | Green Tech</title>
      </Helmet>

      <div className="bg-base-200 p-8 pt-20">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <img src={imgUrl} alt={title} className="rounded-lg shadow-2xl w-full h-[250px] md:h-[320px] lg:h-[380px]" />
          </div>

          <div className="flex-1 space-y-2 p-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="font-medium">
              Price: <span className="text-[#FF5722]">${price}</span>
            </p>

            <div>
              <h5 className="font-medium">Features:</h5>
              <ul>
                {features?.map((feature, idx) => (
                  <li key={idx} className="list-disc ml-8">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-8 items-center">
              <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
              {wishlistCheck ? (
                <button onClick={() => handleWishlistRemove(_id)} className="hover:scale-110 tooltip" data-tip="Remove from wishlist">
                  <FaHeart className="text-[#FF5722] text-xl" />
                </button>
              ) : (
                <button onClick={() => handleWishlistAdd(productData)} className="hover:scale-110 tooltip" data-tip="Add to wishlist">
                  <FaRegHeart className="text-[#FF5722] text-xl" />
                </button>
              )}
              <div className="flex items-center">
                <button onClick={handleDiscrease} className="btn btn-sm bg-[#FF5722] text-white text-xl font-bold">-</button>
                <input value={quantity} type="text" readOnly className="w-[60px] p-[2px] text-center" />
                <button onClick={handleIncrease} className="btn btn-sm bg-[#F29120] text-white text-xl font-bold">+</button>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <button onClick={() => handleAddtoCart(productData)} className="btn bg-[#F29120] hover:bg-[#d68324] text-white mt-3">Add to Cart</button>
              <button onClick={() => handleBuyAddtoCart(productData)} className="btn bg-[#FF5722] hover:bg-[#ec5527] text-white mt-3">Buy Now</button>
            </div>
          </div>
        </div>

        {description && (
          <div className="p-4">
            <p><span className="font-medium">Description:</span> {description}</p>
          </div>
        )}

        {/* Related Products */}
        <div className="bg-base-200 pt-10">
          <h2 className="text-3xl font-bold mb-4">Related Products</h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {isRelatedLoading || !randomProductsData ? (
              <div className="flex items-center justify-center col-span-full py-10">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-t-4 border-orange-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-4 border-dashed border-orange-200 rounded-full animate-spin-slow"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-orange-500 font-bold text-sm">Loading</span>
                </div>
              </div>
            ) : (
              shuffleArray(randomProductsData || []).map((product) => (
                <Link to={`/product/${product._id}`} key={product._id} className="card card-compact bg-base-100 shadow-xl mt-5">
                  <figure>
                    <img className='w-full h-[150px] hover:scale-110' src={product.imgUrl} alt={product.title} />
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
              ))
            )}
          </div>
        </div>
      </div>

      <ServiceSection />
    </div>
  );
};

export default ProductDetail;
