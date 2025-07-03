import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0D1B2A] text-[#F5F5F5]">
      <footer className="p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <nav>
            <Link to="/">
              <img
                className="w-[170px] h-[70px] hover:scale-105"
                src="https://i.ibb.co/4Zdz1LPN/navLogo.png"
                alt="logo image"
              />
            </Link>
            <div className="space-y-3 mt-4">
              <h4>
                Green Tech is the largest Eco Product importer and Distributor in USA and now holds the leading position in the ecosystem industry.
              </h4>
              <div className="flex gap-5 mt-2">
                <FaFacebook className="text-3xl" />
                <FaInstagram className="text-3xl" />
                <a
                  href="https://wa.me/+14036941173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600"
                >
                  <FaWhatsappSquare className="text-3xl text-green-600 bg-white rounded" />
                </a>
              </div>
            </div>
          </nav>

          <nav className="md:ml-8 lg:ml-8">
            <h6 className="footer-title font-semibold text-lg mb-2 ">Company</h6>
            <div className="flex flex-col gap-2">
              <Link to="/brands" className="link link-hover">Brands</Link>
              <Link to="/blogs" className="link link-hover">Blogs</Link>
              <Link to="/categories" className="link link-hover">Categories</Link>
              <Link to="/terms-of-use" className="link link-hover">Term of Use</Link>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title font-semibold text-lg mb-2">Information</h6>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/+14036941173" target="_blank" rel="noopener noreferrer" className="link link-hover">Support us</a>
              <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
              <Link to="/refound-policy" className="link link-hover">Refund Policy</Link>
              <Link to="/shipping-policy" className="link link-hover">Shipping & Delivery</Link>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title font-semibold text-lg mb-2">Quick Links</h6>
            <div className="flex flex-col gap-2">
              <Link to="/about-us" className="link link-hover">About Us</Link>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Service Center</a>
            </div>
          </nav>
        </div>
      </footer>

      <div className="text-center pb-5">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by <strong>nagreentech.com</strong></p>
      </div>
    </div>
  );
};

export default Footer;
