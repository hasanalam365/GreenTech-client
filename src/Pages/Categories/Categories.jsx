import { Helmet } from "react-helmet-async";
import CategoryProduct from "../../Components/CategoryProduct";
import SecurityCamera from "../../Components/SecurityCameras/SecurityCamera";
import useProductsData from "../../hooks/useProductsData";
import NewArrival from "../Home/NewArrival/NewArrival";
import PopularProducts from "../Home/PopularProducts/PopularProducts";
import ServiceSection from "../Home/ServiceSection";

const Categories = () => {
    const [products, isLoading] = useProductsData();

    const categories = products ? [...new Set(products.map(product => product.category))] : [];

    const categoryMap = {
        "Smart Phone": products.filter(product => product.category === "Smart Phone"),
        "Gadget Deals": products.filter(product => product.category === "Gadget Deals"),
        "Smart Home": products.filter(product => product.category === "Smart Home"),
        "Tech Essentials": products.filter(product => product.category === "Tech Essentials"),
        "Best Sellers": products.filter(product => product.category === "Best Sellers"),
        "Trending Gadgets": products.filter(product => product.category === "Trending Gadgets"),
        "Innovative Tech": products.filter(product => product.category === "Innovative Tech"),
        "Top Rated": products.filter(product => product.category === "Top Rated"),
        "Wearable Tech": products.filter(product => product.category === "Wearable Tech"),
        "Home Automation": products.filter(product => product.category === "Home Automation"),
        "Portable Devices": products.filter(product => product.category === "Portable Devices"),
    };

    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
            <Helmet>
                <title>Category | Green Tech</title>
            </Helmet>

            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Left Side */}
                    <div className="w-full lg:w-3/4 space-y-12 animate__animated animate__fadeIn">
                        <NewArrival />
                        <PopularProducts />
                        <SecurityCamera />
                        {Object.entries(categoryMap).map(([name, list]) =>
                            <CategoryProduct key={name} categoryProducts={list} categoryName={name} />
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-1/4 sticky top-20 h-fit bg-white rounded-xl shadow-md p-6 animate__animated animate__fadeInRight">
                        <h5 className="text-center text-2xl font-bold text-[#0D1B2A] mb-2">All Categories</h5>
                        <div className="divider"></div>
                        <ul className="pl-4 font-medium space-y-2 text-gray-700">
                            {categories.map((category, idx) => (
                                <li
                                    key={idx}
                                    className="list-disc hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                                >
                                    <a href={`#${category}`}>{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-20 animate__animated animate__fadeInUp">
                    <ServiceSection />
                </div>
            </div>
        </div>
    );
};

export default Categories;
