import { FaWhatsappSquare } from "react-icons/fa";
import Banner from "../Banner/Banner";
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import CategoriesList from "../CategoriesList/CategoriesList";
import ServiceSection from "../ServiceSection";
import { useEffect, useState } from "react";
import { FaArrowUp, FaChevronUp } from "react-icons/fa6";
import CategoryProduct from "../../../Components/CategoryProduct";
import useProductsData from "../../../hooks/useProductsData";
import Testimonial from "../Testimonial/Testimonials"
import Contact from "../Contact/Contact"
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [products, isLoading] = useProductsData()

    const populars = products.filter(product => product.category === 'Popular')
    const newArrivals = products.filter(product => product.category === 'New Arrival')
    const securityCameras = products.filter(product => product.category === 'Security Camera')
    const smartPhones = products.filter(product => product.category === 'Smart Phone')

    // Show or hide the button based on scroll direction
    const handleScroll = () => {
        const currentScrollY = window.pageYOffset;

        // Show button when scrolling up (towards the top)
        if (currentScrollY < lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // Update the last scroll position
        setLastScrollY(currentScrollY);
    };

    // Scroll the page to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]); // Dependency array includes lastScrollY to update on scroll


    return (
        <div>
            <Helmet>
                <title>Home | Green Tech </title>
            </Helmet>
            <Banner></Banner>
            <div className={`tooltip tooltip-left fixed bottom-10 right-5 z-50 ${isTooltipVisible ? 'tooltip-open' : ''}`} data-tip="May I help you,Sir/Madam?">
                <a
                   href="https://wa.me/+14036941173"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                    className="hover:text-orange-600 hidden md:block lg:block"
                >
                    <FaWhatsappSquare className="text-3xl text-green-600 bg-white " />
                </a>
            </div>

            <CategoriesList />

            <CategoryProduct categoryProducts={smartPhones} categoryName="Smart Phone"></CategoryProduct>
            <CategoryProduct categoryProducts={newArrivals} categoryName="New Arrival"></CategoryProduct>


            <div className="flex flex-col md:flex-row lg:flex-row gap-5 p-4">
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/JmS84pt/home-down-2.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/m9XYrXP/home-down-1.jpg" alt="" />
                </div>
            </div>

            <CategoryProduct categoryProducts={populars} categoryName="Popular"></CategoryProduct>

            <div className="mt-5">
                <img className="w-full h-[150px] md:h-[200px] lg:h-[250px]" src="https://i.ibb.co/DkHnKyS/dilwali-offers.jpg" alt="" />
            </div>

            <CategoryProduct categoryProducts={securityCameras} categoryName="Security Camera"></CategoryProduct>


            <Testimonial></Testimonial>

            <Contact></Contact>
            
            <div className="divider"></div>
            <BrandsLogo></BrandsLogo>
            <div className="divider"></div>
            <ServiceSection></ServiceSection>

            <div className="fixed bottom-5 md:bottom-10 lg:bottom-10 right-5 z-50">
                {isVisible && (
                  
                    <button
                              onClick={scrollToTop}
                              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition duration-300 animate__animated animate__fadeInUp"
                              aria-label="Scroll to top"
                            >
                              <FaChevronUp className="text-xl" />
                            </button>
                )}
            </div>
        </div>
    );
};

export default Home;