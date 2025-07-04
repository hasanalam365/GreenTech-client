import useCartList from "../hooks/useCartList";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const CheckoutPage = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [orderId, setOrderId] = useState('');

    const { user } = useAuth()
    const [data, refetch, isLoading] = useCartList()
    const navigate = useNavigate()
    const totalPrices = data.reduce((total, product) => total + (product.productData.price * product.quantity), 0)

    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    const axiosPublic = useAxiosPublic()

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let createId = ''

    for (let i = 0; i < 8; i++) {
        const randomCreateId = Math.floor(Math.random() * characters.length)

        createId += characters[randomCreateId]
    }

    useEffect(() => {

        setOrderId(createId);
    }, []);


    const handleCheckboxChange = (index) => {
        setSelectedCheckbox(index);
    };

    const handleIncrease = async (productId) => {
        const res = await axiosPublic.put(`/quantity-plus/${productId}`)
        if (res.data.modifiedCount === 1) {
            refetch()
        }
    }

    const handleDiscrease = async (productId) => {
        const res = await axiosPublic.put(`/quantity-minus/${productId}`)
        if (res.data.modifiedCount === 1) {
            refetch()
        }
    }

    const handleDelete = async (_id) => {
        const res = await axiosPublic.delete(`/addToCart/${_id}/${user.email}`)
        if (res.data.deletedCount === 1) {
            toast('Deleted from cart')
            refetch()
        }
    }


    const handleConfirm = async () => {
        const allProduct = data.map(product => ({
            ...product.productData,
            quantity: product.quantity,
        }));

        const orderInfo = {
            paymentType: selectedCheckbox,
            orderId: orderId,
            totalPrices: totalPrices + 20,
            date: date,
            time: time,
            allProducts: allProduct,

        }
        navigate('/dashboard/address', { state: { orderId, orderInfo } });
    }


    return (
        <div className="flex flex-col md:flex-row gap-2  px-4 md:px-[10px] bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-2 h-full ">
          <Helmet>
            <title>Checkout | Green Tech</title>
          </Helmet>
      
          {/* 🛒 Cart Section */}
          <div className="w-full md:w-3/5 space-y-4">
            <div className="bg-orange-600 text-center rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white py-3">🛒 Shopping Cart</h3>
            </div>
      
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-b-green-600"></div>
                <span className="ml-4 text-green-600 font-semibold text-lg">Loading...</span>
              </div>
            ) : data.length === 0 ? (
              <div className="text-center text-xl font-medium text-gray-700 mt-10">Your cart is empty 😢</div>
            ) : (
              <div className="space-y-4">
                {data.map((cart) => (
                  <div key={cart._id} className="flex items-center gap-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
                    <img src={cart.productData.imgUrl} className="w-[70px] h-[70px] rounded-lg object-cover" alt="" />
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm md:text-base w-[85%] text-gray-800">{cart.productData.title}</h4>
                        <FiTrash onClick={() => handleDelete(cart._id)} className="text-xl text-gray-500 hover:text-red-600 transition" />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-green-600 font-semibold">${cart.productData.price * cart.quantity}</span>
                        <div className="flex gap-2 text-2xl items-center text-gray-600">
                          <CiSquareMinus onClick={() => handleDiscrease(cart._id)} className="cursor-pointer hover:text-red-500" />
                          <span className="text-base font-medium">{cart.quantity}</span>
                          <CiSquarePlus onClick={() => handleIncrease(cart._id)} className="cursor-pointer hover:text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
      
          {/* 🧾 Order Summary */}
          <div className="w-full md:w-2/5 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <div className="bg-orange-600 text-white text-center rounded-md mb-4">
              <h3 className="text-lg font-semibold py-2">🧾 Order ID: <span className="font-bold tracking-wider">{orderId}</span></h3>
            </div>
      
            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <p className="font-medium">📅 Date:</p>
                <p>{date}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">⏰ Time:</p>
                <p>{time}</p>
              </div>
            </div>
      
            <div className="divider my-3" />
      
            {/* 💳 Payment Method */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-gray-700">💳 Select Payment Method</h4>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCheckbox === 'Cash On Delivery'}
                  onChange={() => handleCheckboxChange('Cash On Delivery')}
                  className="checkbox checkbox-success"
                />
                <span className="text-gray-800 font-medium">Cash On Delivery</span>
              </label>
            </div>
      
            {/* 💰 Price Breakdown */}
            <div className="border-t border-b border-gray-300 py-4 space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrices}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$20</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold text-lg text-green-700">
                <span>Total</span>
                <span>${totalPrices + 20}</span>
              </div>
            </div>
      
            <button
              onClick={handleConfirm}
              className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold text-lg transition"
            >
              ✅ Confirm Order
            </button>
          </div>
        </div>
      );
      
};

export default CheckoutPage;