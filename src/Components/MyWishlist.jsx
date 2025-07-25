import { MdDeleteForever } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const MyWishlist = () => {
    const [wishlistData, refetch, isLoading] = useWishlist()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()


    const handleDeleteWishlist = async (id) => {
        const res = await axiosPublic.delete(`/wishlist/delete/${id}`)
        if (res.data.deletedCount === 1) {
            toast.error('This item has been delete from wishlist')
            refetch()
        }
    }

    const handleAddCart = async (product) => {
        const addCartInfo = {
            email: user?.email,
            productId: product.product._id,
            productData: product.product,
            quantity: product.quantity
        }

        await axiosPublic.post('/addToCart', addCartInfo)
        toast('added cart')
        await axiosPublic.delete(`/wishlist/delete/${product._id}`)
        refetch()
    }

    const handleIncrease = async (productId) => {
        const res = await axiosPublic.put(`/whishlist/quantity-plus/${productId}`)
        if (res.data.modifiedCount === 1) {
            refetch()
        }
    }

    const handleDiscrease = async (productId) => {
        const res = await axiosPublic.put(`/whishlist/quantity-minus/${productId}`)
        if (res.data.modifiedCount === 1) {
            refetch()
        }
    }

    return (
        <div className="md:w-full mx-auto  bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full">
            <Helmet>
                <title>Wishlist | Dashboard | Green Tech </title>
            </Helmet>
            <div className="text-center mb-6">
        <h4 className="text-3xl font-bold text-green-700">Your Wishlist</h4>
        <p className="text-gray-600">Save the products you love most!</p>
      </div>
            {isLoading ? (
                 <div className="flex justify-center items-center min-h-[300px]">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                 <span className="ml-4 text-green-600 font-semibold">Loading...</span>
             </div>
            ) :wishlistData.length === 0 ? (
                <div className="flex flex-col justify-center items-center mt-10 space-y-4 p-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="Empty Wishlist"
                    className="w-36 h-36 opacity-70"
                  />
                  <h2 className="text-2xl font-semibold text-gray-600">Your wishlist is empty</h2>
                  <p className="text-gray-500 text-center max-w-md">
                    Looks like you haven’t added anything to your wishlist yet.
                    Start exploring and save your favorite items!
                  </p>
                  <button
                    onClick={() => window.location.href = '/'} // You can change this route
                    className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) :

                <div className="flex flex-col gap-3 mt-2 p-2">
                    {
                        wishlistData.map(cart => <div key={cart._id} className="flex items-center justify-center  gap-2  border-2 border-gray-100 p-2">

                            <div className="">
                                <img src={cart.product.imgUrl} className="w-[70px] h-[70px] rounded-lg" alt="" />
                            </div>
                            <div className="flex flex-col justify-between w-[75%]">
                                <div className="flex justify-between">
                                    <h4 className="font-medium w-[85%]">{cart.product.title}</h4>
                                    <div className="flex flex-row gap-3">
                                        <button onClick={() => handleDeleteWishlist(cart._id)}>
                                            <MdDeleteForever className="text-xl hover:scale-125 hover:text-red-600" />
                                        </button>
                                        <button onClick={() => handleAddCart(cart)}>
                                            <FiShoppingCart className="text-xl hover:scale-125 hover:text-[#FF5722]"></FiShoppingCart>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h5 className="text-[#40BFFF]">${cart.product.price * cart.quantity}</h5>
                                    <div className="flex items-center justify-center gap-2 ">
                                        <CiSquareMinus onClick={() => handleDiscrease(cart._id)} className="text-2xl" />
                                        <h5>{cart.quantity}</h5>
                                        <CiSquarePlus onClick={() => handleIncrease(cart._id)} className="text-2xl" />

                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default MyWishlist;