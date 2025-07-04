import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CategoryProduct from "../../Components/CategoryProduct";
import SecurityCamera from "../../Components/SecurityCameras/SecurityCamera";
import useProductsData from "../../hooks/useProductsData";
import NewArrival from "../Home/NewArrival/NewArrival";
import PopularProducts from "../Home/PopularProducts/PopularProducts";
import ServiceSection from "../Home/ServiceSection";
import { FaChevronUp } from "react-icons/fa";

const Categories = () => {
  const [products, isLoading] = useProductsData();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const categories = [...new Set(products?.map(p => p.category))];

  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat] = products.filter(p => p.category === cat);
    return acc;
  }, {});

  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-white min-h-screen">
      <Helmet><title>Categories | Green Tech</title></Helmet>
      <div className="container mx-auto px-4 py-10">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            <span className="ml-4 text-green-600 font-semibold">Loading...</span>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <div className="w-full lg:w-3/4 space-y-12 animate__animated animate__fadeIn">
              {Object.entries(categoryMap).map(([name, list]) => (
                <CategoryProduct key={name} categoryProducts={list} categoryName={name} />
              ))}
            </div>
            <div className="w-full lg:w-1/4 lg:sticky top-20 h-fit bg-white rounded-xl shadow-md p-6 animate__animated animate__fadeInRight">
              <h5 className="text-center text-2xl font-bold text-[#0D1B2A] mb-2">All Categories</h5>
              <div className="divider"></div>
              <ul className="pl-4 font-medium space-y-2 text-gray-700">
                {categories.map((cat, i) => (
                  <li key={i} className="list-disc hover:text-orange-600 transition cursor-pointer">
                    <a href={`#${cat}`}>{cat}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="mt-20 animate__animated animate__fadeInUp">
          <ServiceSection />
        </div>
      </div>
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition duration-300 animate__animated animate__fadeInUp">
          <FaChevronUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Categories;