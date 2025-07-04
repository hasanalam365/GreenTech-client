import { Rating } from "@smastrom/react-rating";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, products, isLoading } = location.state || {};
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (!category || !products) {
    return <p className="text-center mt-20 text-red-500">No category or products available.</p>;
  }

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddToCart = async (product) => {
    if (user?.email) {
      try {
        await axiosSecure.post('/addToCart', {
          email: user.email,
          productId: product._id,
          productData: product,
          quantity: 1,
        });
        toast('Added to cart');
      } catch (error) {
        toast.error('Failed to add to cart');
      }
    } else {
      Swal.fire({
        title: "Not Logged In",
        text: "Please login",
        icon: "warning"
      }).then((res) => {
        if (res.isConfirmed) {
          navigate('/login', { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="p-4 mt-10">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <span className="ml-4 text-green-600 font-semibold">Loading...</span>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-5">{category}</h3>
          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {paginatedProducts.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="relative group card card-compact bg-base-100 shadow-xl mt-5 overflow-hidden"
              >
                <figure>
                  <img
                    className="w-full h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
                    src={product.imgUrl}
                    alt={product.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-medium">{product.title}</h2>
                  <p className="font-medium">$ <span>{product.price}</span></p>
                  <div className="flex justify-between items-center">
                    <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
                    <FaArrowRight className="text-lg text-orange-600 hover:text-xl" />
                  </div>
                </div>

                {/* Add to Cart button with hover animation */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigation
                    handleAddToCart(product);
                  }}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 
                             group-hover:opacity-100 group-hover:translate-y-0 
                             transition-all duration-300 ease-in-out 
                             bg-[#121216] text-white px-4 py-1 rounded-md text-sm shadow-lg w-[90%]"
                >
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-10">
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`join-item btn ${currentPage === index + 1 ? "bg-green-500 text-white" : ""}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="join-item btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
