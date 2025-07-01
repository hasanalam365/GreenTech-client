import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { signUpUser, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [correctPass, setCorrectPass] = useState("");
  const [imgPrev, setImgPrev] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleAddress = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    try {
      const form = e.target;
      const displayName = form.name.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const photo = form.photo.files[0];
      const division = form.division.value;
      const district = form.district.value;
      const thana = form.thana.value;
      const address = form.address.value;
      const confirmPassword = form.confirmPassword.value;

      if (correctPass !== confirmPassword) {
        setErrorText("Password Not Match");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("image", photo);

      const res = await axios.post(image_hosting_api, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: false
      });
      const photoURL = res.data.data.display_url;

      const userInfo = {
        displayName,
        phone,
        email,
        division,
        district,
        thana,
        address,
        photoURL
      };

      const resUser = await axiosPublic.post(`/newUser`, userInfo);

      if (resUser.data.insertedId) {
        signUpUser(email, confirmPassword)
          .then((result) => {
            if (result.user) {
              toast("Register Successfully!");
              signOutUser();
              navigate("/login");
            }
          })
          .catch(() => toast.error("User already exists"))
          .finally(() => setIsSubmitting(false)); 
      } else {
        setIsSubmitting(false);
      }

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="pt-16 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Register | Green Tech </title>
      </Helmet>
      <motion.section
        className="dark:text-gray-900 md:w-3/4 lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <form onSubmit={handleAddress} className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-green-800">Create Your Account</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" required />
            <input name="division" type="text" placeholder="Division" className="input input-bordered w-full" required />
            <input name="district" type="text" placeholder="District" className="input input-bordered w-full" required />
            <input name="thana" type="text" placeholder="Thana" className="input input-bordered w-full" required />
            <input name="address" type="text" placeholder="Full Address" className="input input-bordered col-span-full" required />
            <div className="col-span-full">
              <label className="block mb-1 font-medium">Profile Photo</label>
              <input type="file" name="photo" onChange={(e) => setImgPrev(e.target.files[0]?.name)} required />
              <p className="text-sm mt-1 text-green-600">{imgPrev || "No file selected"}</p>
            </div>
            <input type="password" name="password" placeholder="Password" onChange={(e) => setCorrectPass(e.target.value)} className="input input-bordered w-full" required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" required />
            {errorText && <p className="text-red-600 col-span-full">{errorText}</p>}
          </div>

          <motion.button
            type="submit"
            className="btn btn-secondary w-full mt-4 flex justify-center"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner text-green-400"></span>
            ) : (
              "Register"
            )}
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?
            <Link to="/login" className="text-green-700 font-semibold hover:underline ml-1">Log In</Link>
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Register;
