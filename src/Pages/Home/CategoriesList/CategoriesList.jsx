import { Link } from "react-router-dom";
import useProductsData from "../../../hooks/useProductsData";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

// Icon helper (unchanged)
const getCategoryIcon = (category) => {
    const lower = category.toLowerCase();
    if (lower.includes("watch")) return "⌚";
    if (lower.includes("camera")) return "📷";
    if (lower.includes("phone")) return "📱";
    if (lower.includes("home")) return "🏠";
    if (lower.includes("popular")) return "🔥";
    if (lower.includes("new") || lower.includes("arrival")) return "🆕";
    if (lower.includes("gadget")) return "🧰";
    return "🛒";
};

const CategoriesList = () => {
    const [products, isLoading] = useProductsData();

    if (isLoading) {
        // Loading UI - centered spinner and text
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <span className="ml-4 text-green-600 font-semibold">Loading...</span>
            </div>
        );
    }

    const categories = products ? [...new Set(products.map(product => product.category))] : [];

    const getProductsByCategory = (categoryName) => {
        return products.filter(product => product.category === categoryName);
    };

    return (
        <div className="py-12 px-4 bg-[url('https://i.ibb.co/FhQC8JK/green-tech-bg.jpg')] bg-cover bg-center bg-no-repeat relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e7f7ec]/90 to-white/90 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-0">
                <h3 className="text-3xl font-semibold mb-4 text-gray-800 border-l-4 border-green-500 pl-3">
                    🌿 Explore Categories
                </h3>
                <div className="divider my-2" />

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper px-2 md:px-8"
                >
                    {categories.map(category => (
                        <SwiperSlide key={category}>
                            <Link
                                to="/category"
                                state={{
                                    category,
                                    products: getProductsByCategory(category),
                                    isLoading,
                                }}
                                className="block"
                            >
                                <div className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl p-5 flex items-center justify-center flex-col hover:scale-105 cursor-pointer">
                                    <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
                                    <p className="text-lg font-medium text-gray-700 text-center capitalize">
                                        {category}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategoriesList;
