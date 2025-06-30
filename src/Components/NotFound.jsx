import { Link } from "react-router-dom";
import "animate.css";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
            <div className="text-center animate__animated animate__fadeInUp">
                <div className="text-[120px] md:text-[150px] font-bold text-[#0D1B2A] animate__animated animate__bounceInDown">
                    404
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-[#0D1B2A] mb-4 animate__animated animate__fadeInDown animate__delay-1s">
                    Oops! Page Not Found 😢
                </p>
                <p className="text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-2s">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 text-white text-lg font-medium bg-orange-500 rounded-lg hover:bg-orange-600 transition transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s"
                >
                    🔙 Back to Home
                </Link>

                <div className="mt-10 animate__animated animate__pulse animate__infinite">
                    <span className="text-5xl">🌱</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
