import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const [imgPrev, setImgPrev] = useState("");
  const [feature, setFeature] = useState([]);
  const [currentFeatures, setCurrentFeatures] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = selectedCategory;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.files[0];

    try {
      const formData = new FormData();
      formData.append("image", photo);
        const res = await axios.post(image_hosting_api, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: false 
          });
          
      const imgUrl = res.data.data.display_url;

      const productData = {
        title,
        category,
        rating,
        features: feature,
        stock,
        price,
        description,
        imgUrl,
      };

      const addProduct = await axiosSecure.post("/add-product", productData);
      if (addProduct.data.insertedId || addProduct.data.modifiedCount === 1) {
        toast.success("Product added successfully");
        form.reset();
        setImgPrev("");
        setFeature([]);
        setSelectedCategory("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddFeature = () => {
    if (currentFeatures && !feature.includes(currentFeatures)) {
      setFeature([...feature, currentFeatures]);
      setCurrentFeatures("");
    }
  };

  const handleRemoveFeature = (item) => {
    setFeature(feature.filter((f) => f !== item));
  };

  const handleImg = (e) => {
    const photo = e.target.files[0];
    setImgPrev(photo.name);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-10 px-6 md:px-10 lg:px-16 min-h-screen">
      <Helmet>
        <title>Add Product | Admin | Green Tech</title>
      </Helmet>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Add New Product</h2>

        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Product Title</label>
            <input type="text" name="title" required className="input input-bordered w-full" />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered w-full"
              required
            >
             <option disabled value="">Pick your category</option>
                            <option value="Popular">Popular</option>
                            <option value="New Arrival">New Arrival</option>
                            <option value="Best Sellers">Best Sellers</option>
                            <option value="Trending Gadgets">Trending Gadgets</option>
                            <option value="Smart Home">Smart Home</option>
                            <option value="Tech Essentials">Tech Essentials</option>
                            <option value="Innovative Tech">Innovative Tech</option>
                            <option value="Gadget Deals">Gadget Deals</option>
                            <option value="Top Rated">Top Rated</option>
                            <option value="Wearable Tech">Wearable Tech</option>
                            <option value="Home Automation">Home Automation</option>
                            <option value="Portable Devices">Portable Devices</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <input type="number" name="rating" step="0.1" required className="input input-bordered w-full" />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 font-medium">Stock Quantity</label>
            <input type="number" name="stock" required className="input input-bordered w-full" />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price ($)</label>
            <input type="number" name="price" required className="input input-bordered w-full" />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">Product Image</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleImg}
              required
              className="file-input file-input-bordered w-full"
            />
            {imgPrev && <p className="text-sm mt-1 text-gray-600">Selected: {imgPrev}</p>}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              rows="3"
              required
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Features */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Features</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentFeatures}
                onChange={(e) => setCurrentFeatures(e.target.value)}
                className="input input-bordered w-full"
                placeholder="e.g. Battery: 5000mAh"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="btn bg-green-500 text-white hover:bg-green-600"
              >
                Add
              </button>
            </div>

            {/* Show Added Features */}
            {feature.length > 0 && (
              <ul className="mt-3 space-y-2">
                {feature.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-green-100 text-green-700 p-2 rounded-md flex justify-between items-center"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(item)}
                      className="text-red-600 font-bold hover:text-red-800"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-6">
            <button type="submit" className="btn w-full bg-green-600 text-white hover:bg-green-700">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
