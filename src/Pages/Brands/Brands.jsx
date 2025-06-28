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
        logo: "https://i.ibb.co/3SmwBp4/apple-logo.png",
        bg: "bg-white"
    },
    {
        name: "Xiaomi",
        logo: "https://i.ibb.co/Zxg6Tgx/xiaomi-logo.png",
        bg: "bg-white"
    },
    {
        name: "Realme",
        logo: "https://i.ibb.co/6bByKH2/realme-logo.png",
        bg: "bg-white"
    },
    {
    name: "Huawei",
    logo: "https://i.ibb.co/4YxZk4M/huawei-logo.png",
    bg: "bg-white"
},
{
    name: "Samsung",
    logo: "https://i.ibb.co/5110PgS/samsung-removebg-preview.png",
    bg: "bg-white"
},
{
    name: "Apple",
    logo: "https://i.ibb.co/3SmwBp4/apple-logo.png",
    bg: "bg-white"
},
{
    name: "Xiaomi",
    logo: "https://i.ibb.co/Zxg6Tgx/xiaomi-logo.png",
    bg: "bg-white"
},
{
    name: "Realme",
    logo: "https://i.ibb.co/6bByKH2/realme-logo.png",
    bg: "bg-white"
},
{
    name: "OnePlus",
    logo: "https://i.ibb.co/ZJ8c94H/oneplus-logo.png",
    bg: "bg-white"
},
{
    name: "Huawei",
    logo: "https://i.ibb.co/4YxZk4M/huawei-logo.png",
    bg: "bg-white"
},
{
    name: "Tecno",
    logo: "https://i.ibb.co/TTZyktH/tecno-logo.png",
    bg: "bg-white"
},
{
    name: "Infinix",
    logo: "https://i.ibb.co/4WzRvsL/infinix-logo.png",
    bg: "bg-white"
    },
{
    name: "Amazfit",
    logo: "https://i.ibb.co/NK1ZVqL/amazfit-logo.png",
    bg: "bg-white"
},
{
    name: "Oraimo",
    logo: "https://i.ibb.co/J3Z3TPc/oraimo-removebg-preview.png",
    bg: "bg-white"
},
{
    name: "Noise",
    logo: "https://i.ibb.co/ChTdJ4k/noise-logo.png",
    bg: "bg-white"
},
{
    name: "Fire-Boltt",
    logo: "https://i.ibb.co/D9KqSJN/fireboltt-logo.png",
    bg: "bg-white"
},
{
    name: "boAt",
    logo: "https://i.ibb.co/Yb7pG17/boat-logo.png",
    bg: "bg-white"
    },
{
    name: "Mi Box",
    logo: "https://i.ibb.co/SRPjgvD/mi-box-logo.png",
    bg: "bg-white"
},
{
    name: "Realme TV Stick",
    logo: "https://i.ibb.co/xFGkybM/realme-tv-stick-logo.png",
    bg: "bg-white"
},
{
    name: "Amazon Fire TV",
    logo: "https://i.ibb.co/vx3GpHr/fire-tv-logo.png",
    bg: "bg-white"
},
{
    name: "Google Chromecast",
    logo: "https://i.ibb.co/2cqzTV5/chromecast-logo.png",
    bg: "bg-white"
}




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
