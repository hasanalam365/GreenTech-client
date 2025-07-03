import { FaArrowRight } from "react-icons/fa";
import useProductsData from "../../hooks/useProductsData";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const SecurityCamera = () => {
    const [products, isLoading] = useProductsData()
    const securityCameras = products.filter(product => product.category === 'Security Camera')

    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-10" id="Security Camera">

            {isLoading ?  <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <span className="ml-4 text-green-600 font-semibold">Loading...</span>
            </div>
                : <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-semibold">Security Camera</h3>
                        {
                            securityCameras.length > 10 && <Link to="/category"
                                state={{ category: 'Security Camera', products: securityCameras, isLoading: isLoading }}
                                className="text-lg md:text-xl font-medium text-orange-600 hover:scale-105">See more</Link>
                        }
                    </div>
                    <div className="divider mt-0"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {
                            securityCameras.slice(0, 10).map(securityCamera => <Link to={`/product/${securityCamera._id}`} key={securityCamera._id} className="card card-compact bg-base-100 shadow-xl mt-5 ">
                                <figure>

                                    <img className='w-full h-[150px] hover:scale-110' src={securityCamera.imgUrl} alt="" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-medium">{securityCamera.title}</h2>
                                    <p className="font-medium">$ <span className="">{securityCamera.price}</span></p>

                                    <div className="flex justify-between">
                                        <Rating style={{ maxWidth: 100 }} value={securityCamera.rating} readOnly />
                                        <div className="flex gap-4">
                                            <FaArrowRight className="text-lg text-orange-600 hover:text-xl"></FaArrowRight>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default SecurityCamera;