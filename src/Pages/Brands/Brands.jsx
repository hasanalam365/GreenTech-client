import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ServiceSection from "../Home/ServiceSection";

const brandList = [
    {
        name: "Samsung",
        logo: "https://i.ibb.co/5110PgS/samsung-removebg-preview.png",
        bg: "bg-white"
    },
    {
        name: "Oraimo",
        logo: "https://i.ibb.co/J3Z3TPc/oraimo-removebg-preview.png",
        bg: "bg-base-100"
    },
    {
        name: "Lenovo",
        logo: "https://i.ibb.co/dfvZYm0/lenevo-removebg-preview.png",
        bg: "bg-base-100"
    },
  

{
    name: "Apple",
    logo: "https://i.ibb.co/5x686QyC/iphone-logo.png",
    bg: "bg-white"
},
{
    name: "Xiaomi",
    logo: "https://i.ibb.co/Mkmhgd9C/xioami-brand-logo.jpg",
    bg: "bg-white"
},
{
    name: "Realme",
    logo: "https://i.ibb.co/XxyzXCwf/realme-logo.png",
    bg: "bg-white"
},
{
    name: "OnePlus",
    logo: "https://i.ibb.co/R4gzHC5Z/one-plus-brand-logo.png",
    bg: "bg-white"
},
{
    name: "Huawei",
    logo: "https://i.ibb.co/GKrqGms/huawei-brand-logo.png",
    bg: "bg-white"
},
{
    name: "Tecno",
    logo: "hhttps://i.ibb.co/VWhWR8k3/tecno-brand-logo.jpg",
    bg: "bg-white"
},
{
    name: "Infinix",
    logo: "https://i.ibb.co/v6tkd72G/infinix-brand-logo.jpg",
    bg: "bg-white"
    },


];

const Brands = () => {
    return (
        <div>
             <div className="container mx-auto px-4 mt-16 mb-16">
            <Helmet>
                <title>Brands | Green Tech</title>
            </Helmet>

            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-2 pt-5">🌟 Our Trusted Brands</h2>
                <p className="text-gray-600">We partner with the best in the industry to bring you cutting-edge tech</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {brandList.map((brand, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`card ${brand.bg} card-compact shadow-md border border-gray-200 transition-all duration-300 p-6 hover:shadow-xl cursor-pointer`}
                    >
                        <figure className="h-[100px] flex items-center justify-center">
                            <img src={brand.logo} alt={brand.name} className="h-full object-contain" />
                        </figure>
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
            </div>
            <ServiceSection></ServiceSection>
       </div>
    );
};

export default Brands;
