import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import useProductsData from "../hooks/useProductsData";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CategoryProduct = ({ categoryProducts, categoryName }) => {
  const [, isLoading] = useProductsData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = async (product) => {
    if (user?.email) {
      try {
        await axiosSecure.post('/addToCart', {
          email: user.email,
          productId: product._id,
          productData: product,
          quantity: 1
        });
        toast('Added to cart');
      } catch (error) {
        toast.error('Failed to add to cart');
      }
    } else {
      Swal.fire({ title: "Not Logged In", text: "Please login", icon: "warning" })
        .then(res => res.isConfirmed && navigate('/login', { state: location.pathname }));
    }
  };

  return (
    <div>
      {categoryProducts.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md mt-10" id={categoryName}>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <span className="ml-4 text-green-600 font-semibold">Loading...</span>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-[#0D1B2A]">{categoryName}</h3>
                {categoryProducts.length > 10 && (
                  <Link to="/category" state={{ category: categoryName, products: categoryProducts, isLoading }} className="text-orange-600 hover:underline">
                    See more
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {categoryProducts.slice(0, 10).map(product => (
                  <Link
                    to={`/product/${product._id}`}
                    key={product._id}
                    className="relative group bg-green-50 rounded-xl hover:shadow-lg p-3 transition-all "
                  >
                    <img src={product.imgUrl} alt={product.title} className="w-full h-[150px] object-cover rounded-md hover:scale-105" />
                    <div className="mt-3 space-y-1">
                      <h4 className="text-base font-semibold text-gray-800">{product.title}</h4>
                      <p className="text-green-600 font-bold">$ {product.price}</p>
                      <div className="flex justify-between items-center">
                        <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
                        <FaArrowRight className="text-orange-600 hover:scale-110" />
                      </div>
                    </div>

                    {/* Add to Cart button visible on hover */}
                    <button
  onClick={(e) => {
    e.preventDefault(); // prevent navigation on button click
    handleAddToCart(product);
  }}
  className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 
             group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-300 ease-in-out 
             bg-[#121216] text-white px-4 py-1 rounded-md text-sm shadow-lg w-full"
>
  Add to Cart
</button>

                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
