import { Ri24HoursFill } from "react-icons/ri";
import { GiSwipeCard } from "react-icons/gi";
import { SiGoogleauthenticator } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Ri24HoursFill className="text-5xl text-white" />,
    title: "Support 24/7",
    description: "We support online 24 hours",
    bg: "bg-gradient-to-br from-green-500 to-green-700"
  },
  {
    icon: <GiSwipeCard className="text-5xl text-white" />,
    title: "Online Payment",
    description: "Make payments hands free very easily",
    bg: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    icon: <SiGoogleauthenticator className="text-5xl text-white" />,
    title: "Authentic Product",
    description: "Guaranteed 100% authentic product",
    bg: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    icon: <FaShippingFast className="text-5xl text-white" />,
    title: "Fast Delivery",
    description: "Fast delivery is our first rule",
    bg: "bg-gradient-to-br from-orange-500 to-orange-700"
  }
];

const ServiceSection = () => {
  return (
    <div className="w-[95%] mx-auto mt-16 mb-16">
      <h2 className="text-center text-3xl font-bold mb-10 text-[#0D1B2A]">💼 Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl p-6 text-center shadow-lg bg-white/30 backdrop-blur-md border border-white/20 hover:shadow-2xl transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${service.bg} shadow-lg`}>
              {service.icon}
            </div>
            <h5 className="uppercase font-semibold text-lg mb-1 text-[#0D1B2A]">{service.title}</h5>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
