import useProductsData from "../../../hooks/useProductsData";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

// Emoji-based icon helper
const getCategoryIcon = (category) => {
    const lower = category.toLowerCase();
    if (lower.includes("watch")) return "⌚";
    if (lower.includes("camera")) return "📷";
    if (lower.includes("phone")) return "📱";
    if (lower.includes("home")) return "🏠";
    return "🛒";
};

const CategoriesList = () => {
    const [products, isLoading] = useProductsData();

    const categories = products ? [...new Set(products.map(product => product.category))] : [];

    return (
        <div className="py-12 px-4 bg-[url('https://i.ibb.co/FhQC8JK/green-tech-bg.jpg')] bg-cover bg-center bg-no-repeat relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e7f7ec]/90 to-white/90 backdrop-blur-sm"></div>

            {/* Content Wrapper */}
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
                            <div className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl p-5 flex items-center justify-center flex-col hover:scale-105 cursor-pointer">
                                <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
                                <p className="text-lg font-medium text-gray-700 text-center capitalize">{category}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategoriesList;
